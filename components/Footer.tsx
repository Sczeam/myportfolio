import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="footer" id="contact" data-tone="ink">
      <div className="footer__top">
        <h2 className="footer__head">Let’s talk about a full-time role.</h2>
        <p className="footer__lede">I’m looking for a full-time engineering role on a product team. Based in {site.location}, with no visa sponsorship required.</p>
      </div>
      <a className="footer__cta" href={`mailto:${site.email}`}>
        <span className="footer__cta-fill" aria-hidden="true" />
        <span className="footer__cta-label">Email me</span>
        <span className="footer__cta-addr">{site.email} <span className="arrow" aria-hidden="true">→</span></span>
      </a>
      <div className="footer__grid">
        <ul className="footer__links" aria-label="Elsewhere">
          <li><a className="u-link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="u-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="u-link" href={`mailto:${site.email}`}>Email</a></li>
        </ul>
        <p className="footer__print">
          Designed and built by {site.name}. Set in Instrument Sans and Martian Mono. Next.js, GSAP and Lenis.
          Product screenshots taken from the live sites in October 2026.
        </p>
        <p className="footer__year">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
