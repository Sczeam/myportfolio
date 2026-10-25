// Global motion for this site: runs once on the client, before the first page initializes.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease, onPage, onScroll, setTransition } from '@/engine';

// The element that was opened: a project image that grows into the case-study header.
let source: HTMLElement | null = null;
let label = '';
let name = '';

export function setupMotion() {
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a');
    source = a?.closest<HTMLElement>('[data-volume]')
      ?? a?.querySelector<HTMLElement>('[data-volume]')
      ?? a?.closest('.feature, .row')?.querySelector<HTMLElement>('[data-volume]')
      ?? null;
    label = a ? new URL(a.href, location.href).pathname : '';
    name = a?.dataset.cover ?? '';
  }, true);

  setTransition({
    leave: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      const title = c.querySelector<HTMLElement>('.curtain__title')!;
      const bar = c.querySelector<HTMLElement>('.curtain__bar')!;
      const big = c.querySelector<HTMLElement>('.curtain__name')!;
      title.textContent = `GET ${label}`;
      big.textContent = source ? name : '';
      gsap.set(bar, { scaleX: 0 });
      if (source) {
        // The project image grows into the dark header of its case study.
        const r = source.getBoundingClientRect();
        gsap.set(panel, { clipPath: `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)` });
        gsap.set(title, { autoAlpha: 0 });
        return gsap.timeline()
          .set(c, { autoAlpha: 1 })
          .to(panel, { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.9, ease: ease.inOut })
          .to(bar, { scaleX: 1, duration: 0.9, ease: ease.inOut }, 0)
          .fromTo(big, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: ease.out }, 0.45);
      }
      // Every other link: a panel wipes in left to right, like a progress bar filling.
      gsap.set(title, { autoAlpha: 1 });
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .fromTo(panel, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.75, ease: ease.inOut })
        .to(bar, { scaleX: 1, duration: 0.75, ease: ease.inOut }, 0);
    },
    enter: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      const wasSource = !!source;
      source = null;
      if (wasSource) {
        // The case page opens on a dark header identical to this panel: lift it away.
        return gsap.timeline().to(c, { autoAlpha: 0, duration: 0.45, ease: ease.soft });
      }
      return gsap.timeline()
        .to(panel, { clipPath: 'inset(0% 0% 0% 100%)', duration: 0.8, ease: ease.inOut })
        .set(c, { autoAlpha: 0 });
    },
  });

  // The header steps aside while reading down, returns on the way up with a solid ground,
  // and takes light ink whenever a dark section sits under it.
  const html = document.documentElement;
  let last = 0;
  onScroll(({ y }) => {
    html.classList.toggle('frame-scrolled', y > 40);
    if (Math.abs(y - last) < 6) return;
    html.classList.toggle('frame-away', y > 200 && y > last);
    last = y;
  });
  onPage(() => {
    const items = [...document.querySelectorAll<HTMLElement>('[data-decision]')];
    const links = [...document.querySelectorAll<HTMLElement>('.decisions__index a')];
    if (!items.length) return;
    const triggers = items.map((el, n) => ScrollTrigger.create({
      trigger: el, start: 'top 45%', end: 'bottom 45%',
      onToggle: (s) => { if (s.isActive) links.forEach((l, k) => l.toggleAttribute('data-active', k === n)); },
    }));
    return () => triggers.forEach((t) => t.kill());
  });
  onPage(() => {
    const inks = [...document.querySelectorAll<HTMLElement>('[data-tone="ink"]')];
    const active = new Set<HTMLElement>();
    const sync = () => html.classList.toggle('frame-on-ink', active.size > 0);
    const triggers = inks.map((el) => ScrollTrigger.create({
      trigger: el, start: 'top 36px', end: 'bottom 36px',
      onToggle: (s) => { if (s.isActive) active.add(el); else active.delete(el); sync(); },
    }));
    return () => { triggers.forEach((t) => t.kill()); active.clear(); sync(); };
  });
}
