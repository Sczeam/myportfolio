// The concept's driver: one shelf, one clock.
// Inputs: scroll velocity (books lean, heavier books lean less), the pointer (books near it rise
// as if a finger ran along the spines), time (the reading book's bookmark sways).
// Everything runs on gsap.ticker, only while a shelf is on screen, and never under reduced motion.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease, isTouch, onPage, onScroll, prefersReducedMotion, scrollState } from '@/engine';

type Book = {
  lean: HTMLElement;
  weight: number;
  angle: number;
  spin: number;
  lift: number;
  setRot: (v: number) => void;
  setY: (v: number) => void;
};

export function startShelf() {
  onPage(({ intro }) => {
    const shelves = [...document.querySelectorAll<HTMLElement>('[data-shelf]')];
    if (!shelves.length) return;
    const offs: (() => void)[] = [];
    shelves.forEach((shelf) => offs.push(wireShelf(shelf, intro)));
    return () => offs.forEach((f) => f());
  });
}

function wireShelf(shelf: HTMLElement, intro: gsap.core.Timeline) {
  const leans = [...shelf.querySelectorAll<HTMLElement>('.spine__lean')];
  const caption = shelf.querySelector<HTMLElement>('[data-shelf-caption]');
  const restHTML = caption?.innerHTML ?? '';
  const offs: (() => void)[] = [];

  // Covers are decorative and only seen when a book turns: load them once the page has loaded.
  const covers = [...shelf.querySelectorAll<HTMLImageElement>('img[data-src]')];
  const loadCovers = () => covers.forEach((img) => { if (!img.src) img.src = img.dataset.src!; });
  let coverTimer = 0;
  const onLoad = () => { coverTimer = window.setTimeout(loadCovers, 400); };
  if (document.readyState === 'complete') onLoad();
  else addEventListener('load', onLoad, { once: true });
  offs.push(() => { clearTimeout(coverTimer); removeEventListener('load', onLoad); });

  // A book on the right half turns the other way, so its cover always opens toward the middle.
  const aim = (li: HTMLElement) => {
    const r = li.getBoundingClientRect();
    li.dataset.turn = r.left + r.width / 2 > innerWidth * 0.55 ? 'left' : 'right';
    loadCovers();
  };

  // Caption narrates the spine under the pointer or keyboard focus.
  // null restores the resting caption (its markup differs for pointer and touch).
  const say = (text: string | null) => {
    if (!caption) return;
    if (text === null) { if (caption.innerHTML !== restHTML) caption.innerHTML = restHTML; }
    else if (caption.textContent !== text) caption.textContent = text;
  };
  shelf.querySelectorAll<HTMLElement>('[data-caption]').forEach((el) => {
    const on = () => { aim(el); say(el.dataset.caption!); };
    const off = () => say(null);
    el.addEventListener('pointerenter', on);
    el.addEventListener('pointerleave', off);
    el.addEventListener('focusin', on);
    el.addEventListener('focusout', off);
    offs.push(() => {
      el.removeEventListener('pointerenter', on);
      el.removeEventListener('pointerleave', off);
      el.removeEventListener('focusin', on);
      el.removeEventListener('focusout', off);
    });
  });

  // One tab stop for the whole shelf; arrow keys move along the spines.
  const stops = [...shelf.querySelectorAll<HTMLElement>('.shelf__row .book')];
  stops.forEach((b, i) => { b.tabIndex = i === 0 ? 0 : -1; });
  const keys = (e: KeyboardEvent) => {
    const i = stops.indexOf(document.activeElement as HTMLElement);
    if (i < 0 || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const j = e.key === 'Home' ? 0 : e.key === 'End' ? stops.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + stops.length) % stops.length;
    stops[i].tabIndex = -1;
    stops[j].tabIndex = 0;
    stops[j].focus();
    stops[j].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };
  shelf.addEventListener('keydown', keys);
  offs.push(() => shelf.removeEventListener('keydown', keys));

  if (prefersReducedMotion() || !leans.length) return () => offs.forEach((f) => f());

  // Intro: the books rise from behind the plank in filing order.
  if (shelf.hasAttribute('data-shelf-intro')) {
    gsap.set(leans, { yPercent: 104 });
    intro.add(gsap.to(leans, { yPercent: 0, duration: 1.15, ease: ease.out, stagger: 0.028 }), 0.05);
  } else {
    gsap.from(leans, {
      yPercent: 104, duration: 1.1, ease: ease.out, stagger: 0.03,
      scrollTrigger: { trigger: shelf, start: 'top 80%', once: true },
    });
  }

  const books: Book[] = leans.map((lean) => ({
    lean,
    weight: parseFloat(lean.dataset.weight || '1'),
    angle: 0,
    spin: 0,
    lift: 0,
    setRot: gsap.quickSetter(lean, 'rotation', 'deg') as (v: number) => void,
    setY: gsap.quickSetter(lean, 'y', 'px') as (v: number) => void,
  }));
  const ribbon = shelf.querySelector<HTMLElement>('.ribbon');
  const setRibbon = ribbon ? (gsap.quickSetter(ribbon, 'rotation', 'deg') as (v: number) => void) : null;

  const touch = isTouch();
  const pointer = { x: -9999, y: -9999, inside: false };
  // Idle browse: when nobody touches anything, the shelf pulls one book at a time, in filing
  // order, and the caption names it, like someone running a finger along the spines.
  let lastInput = -1;
  let browsing = -1;
  const poke = () => { lastInput = -1; };
  const move = (e: PointerEvent) => {
    poke();
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    const r = shelf.getBoundingClientRect();
    pointer.inside = e.clientY > r.top - 140 && e.clientY < r.bottom + 40;
  };
  if (!touch) addEventListener('pointermove', move, { passive: true });

  let velocity = 0;
  const offScroll = onScroll(({ velocity: v }) => { velocity = v; poke(); });
  const anyOpen = () => !!shelf.querySelector('.is-open, .spine:hover, .spine:focus-within');
  let centers: number[] = [];
  const measure = () => { centers = books.map((b) => { const r = b.lean.getBoundingClientRect(); return r.left + r.width / 2; }); };

  const tick = (t: number) => {
    const r = gsap.ticker.deltaRatio();
    // Lenis stops reporting when scrolling ends: let the stored velocity fade back to rest.
    velocity *= Math.pow(0.86, r);
    if (Math.abs(scrollState().velocity) < 0.01) velocity *= Math.pow(0.9, r);
    if (touch) measure(); // the shelf scrolls sideways on phones
    if (lastInput < 0) lastInput = t;
    const quiet = t - lastInput - 2.5;
    const next = quiet > 0 && !anyOpen() ? Math.floor(quiet / 2.6) % books.length : -1;
    if (next !== browsing) {
      browsing = next;
      const li = books[next]?.lean.parentElement;
      say(next >= 0 && li?.dataset.caption ? li.dataset.caption : null);
    }
    books.forEach((b, i) => {
      const target = gsap.utils.clamp(-6, 6, (-velocity * 0.32) / b.weight);
      // A damped spring per book: heavier books answer later and settle slower.
      const k = 0.08 / b.weight;
      b.spin += (target - b.angle) * k * r;
      b.spin *= Math.pow(0.78, r);
      b.angle += b.spin * r;
      let liftTarget = i === browsing ? 22 : 0;
      if (pointer.inside && browsing < 0) {
        const d = (pointer.x - centers[i]) / 70;
        liftTarget = 12 * Math.exp(-d * d);
      }
      b.lift += (liftTarget - b.lift) * (1 - Math.pow(0.85, r));
      // Snap to whole pixels and true zero at rest: fractional transforms blur the spine lettering.
      b.setRot(Math.abs(b.angle) < 0.05 ? 0 : Math.round(b.angle * 20) / 20);
      b.setY(-Math.round(b.lift));
    });
    if (setRibbon) setRibbon(Math.sin(t * 1.3) * 4 + Math.sin(t * 0.47) * 2 - books[0].angle * 0.8);
  };

  let running = false;
  const startTick = () => { if (!running) { measure(); gsap.ticker.add(tick); running = true; } };
  const stopTick = () => { if (running) { gsap.ticker.remove(tick); running = false; } };
  const st = ScrollTrigger.create({
    trigger: shelf,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (s) => (s.isActive ? startTick() : stopTick()),
    onRefresh: measure,
  });
  if (st.isActive) startTick();
  addEventListener('resize', measure);

  return () => {
    stopTick();
    st.kill();
    offScroll();
    removeEventListener('pointermove', move);
    removeEventListener('resize', measure);
    offs.forEach((f) => f());
  };
}
