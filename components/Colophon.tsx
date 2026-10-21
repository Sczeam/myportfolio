import { site } from '@/data/site';

export function Colophon() {
  return (
    <footer className="colophon" id="contact" data-tone="ink">
      <p className="colophon__lede">{site.status}. {site.rightToWork}.</p>
      <a className="colophon__cta" href={`mailto:${site.email}`}>
        <span className="colophon__cta-fill" aria-hidden="true" />
        <span className="colophon__cta-label">Email me</span>
        <span className="colophon__cta-addr">{site.email}</span>
      </a>
      <div className="colophon__grid">
        <ul className="colophon__links" aria-label="Elsewhere">
          <li><a className="u-link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="u-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="u-link" href={`mailto:${site.email}`}>Email</a></li>
        </ul>
        <div className="colophon__print">
          <h2 className="colophon__head">Colophon</h2>
          <p>
            Designed and built by {site.name} in {site.location.split(',')[0]}. Set in Archivo and Literata.
            Built with Next.js, GSAP and Lenis. Product screenshots taken from the live sites in October 2026.
          </p>
        </div>
        <p className="colophon__year">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
