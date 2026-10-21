// Global motion for this site: runs once on the client, before the first page initializes.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ease, onPage, onScroll, setTransition } from '@/engine';
import { startShelf } from './shelf';

// The element the visitor pulled: a project spine, a cover, the next-volume band.
let source: HTMLElement | null = null;
let coverTitle = '';

export function setupMotion() {
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a');
    source = a?.closest<HTMLElement>('[data-volume]')
      ?? a?.querySelector<HTMLElement>('[data-volume]')
      ?? a?.closest('.volume')?.querySelector<HTMLElement>('[data-volume]')
      ?? null;
    coverTitle = a?.dataset.cover ?? a?.textContent?.trim().slice(0, 40) ?? '';
  }, true);

  setTransition({
    leave: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      const label = c.querySelector<HTMLElement>('.curtain__title')!;
      label.textContent = coverTitle;

      if (source) {
        // Spine to cover: the pulled volume grows into the full-screen cover of its case study.
        const r = source.getBoundingClientRect();
        gsap.set(panel, { rotationY: 0, clipPath: `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)` });
        gsap.set(label, { autoAlpha: 0, y: 30 });
        return gsap.timeline()
          .set(c, { autoAlpha: 1 })
          .to(panel, { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.95, ease: ease.inOut })
          .to(label, { autoAlpha: 1, y: 0, duration: 0.5, ease: ease.out }, '-=0.35');
      }

      // Every other link: a cover swings shut over the page, hinged on its spine at the left.
      gsap.set(panel, { clipPath: 'none', rotationY: -92, transformOrigin: '0% 50%' });
      gsap.set(label, { autoAlpha: 1, y: 0 });
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .to(panel, { rotationY: 0, duration: 0.85, ease: ease.inOut })
        .fromTo(c.querySelector('.curtain__shade'), { opacity: 0.6 }, { opacity: 0, duration: 0.85, ease: ease.inOut }, 0);
    },
    enter: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      const label = c.querySelector<HTMLElement>('.curtain__title')!;
      const wasVolume = !!source;
      source = null;
      if (wasVolume) {
        // The case page opens on an ink cover identical to this panel: just lift it away.
        return gsap.timeline()
          .to(label, { autoAlpha: 0, duration: 0.3, ease: ease.soft })
          .to(c, { autoAlpha: 0, duration: 0.45, ease: ease.soft }, 0.1)
          .set(panel, { clearProps: 'clipPath' });
      }
      return gsap.timeline()
        .to(panel, { rotationY: -92, duration: 0.9, ease: ease.inOut })
        .fromTo(c.querySelector('.curtain__shade'), { opacity: 0 }, { opacity: 0.6, duration: 0.9, ease: ease.inOut }, 0)
        .set(c, { autoAlpha: 0 });
    },
  });

  // The header steps aside while reading down, returns on the way up with a solid ground,
  // and takes paper ink whenever an ink section sits under it.
  const html = document.documentElement;
  let last = 0;
  onScroll(({ y }) => {
    html.classList.toggle('frame-scrolled', y > 40);
    if (Math.abs(y - last) < 6) return;
    html.classList.toggle('frame-away', y > 200 && y > last);
    last = y;
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

  startShelf();
}
