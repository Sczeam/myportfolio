import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Pipeline } from '@/components/Pipeline';
import { books, projects, site } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title}, a case study`,
    description: `${p.subtitle} A case study by ${site.name}.`.slice(0, 158),
    openGraph: { type: 'article', title: `${p.title} | ${site.name}`, images: [{ url: p.cover.src, width: p.cover.width, height: p.cover.height, alt: p.cover.alt }] },
  };
}

export default async function Work({ params }: PageProps<'/work/[slug]'>) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const related = p.related.map((id) => books.find((b) => b.id === id)!).filter(Boolean);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description: p.subtitle,
    url: `${site.url}/work/${p.slug}/`,
    author: { '@type': 'Person', name: site.name },
    image: `${site.url}${p.cover.src}`,
  };

  return (
    <article className="case">
      <header className="case-head" data-tone="ink">
        <p className="case-head__crumb mono"><Link href="/#work" className="u-link">Work</Link><span aria-hidden="true">/</span><span>{p.slug}</span></p>
        <h1 className="case-head__title">{p.title}</h1>
        <p className="case-head__sub" data-split="lines" data-intro data-delay="0.15">{p.subtitle}</p>
        <dl className="case-head__meta">
          <div><dt>Role</dt><dd>{p.role}</dd></div>
          <div><dt>For</dt><dd>{p.client}</dd></div>
          <div><dt>When</dt><dd>{p.years}</dd></div>
          <div><dt>Live</dt><dd><a className="u-link" href={p.url} target="_blank" rel="noopener noreferrer">{p.urlLabel} <span aria-hidden="true">↗</span></a></dd></div>
        </dl>
      </header>

      <section className="case-key" aria-labelledby="key-title">
        <div className="case-key__facts">
          {p.facts.map((f) => (
            <div key={f.label}><span className="case-key__value">{f.value}</span><span className="case-key__label">{f.label}</span></div>
          ))}
        </div>
        <div className="case-key__main">
          <h2 id="key-title" className="case-key__title">The engineering, in short</h2>
          <ul className="ticks ticks--large">
            {p.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
          <p className="case-key__stack">{p.subjects.join(', ')}</p>
        </div>
      </section>

      <figure className="case-hero" data-reveal="clip">
        <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} sizes="100vw" />
        <figcaption><span className="fig mono">Fig. 1</span> {p.cover.caption}</figcaption>
      </figure>

      <nav className="case-toc" aria-label="Chapters">
        <h2 className="case-toc__head">Chapters</h2>
        <ol>
          {p.chapters.map((c, n) => (
            <li key={c.title}><a href={`#ch-${n + 1}`} data-no-transition className="u-link"><span className="case-toc__n mono">{n + 1}</span> {c.title}</a></li>
          ))}
        </ol>
      </nav>

      <div className="chapters">
        {p.chapters.map((c, n) => {
          const fig = p.figures[n];
          const demo = p.slug === 'one-click-ai' && n === 2;
          return (
            <section key={c.title} id={`ch-${n + 1}`} className="chapter" aria-labelledby={`ch-${n + 1}-t`}>
              <p className="chapter__n mono" aria-hidden="true">{String(n + 1).padStart(2, '0')}</p>
              <div className="chapter__body">
                <h2 id={`ch-${n + 1}-t`} className="chapter__title" data-split="lines">{c.title}</h2>
                {c.text.map((t) => <p key={t.slice(0, 24)} className="chapter__p">{t}</p>)}
                {c.list && (
                  <ul className="chapter__list">
                    {c.list.map((l) => <li key={l}>{l}</li>)}
                  </ul>
                )}
              </div>
              {c.notes && (
                <aside className="chapter__notes" aria-label="Note">
                  {c.notes.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
                </aside>
              )}
              {demo && (
                <div className="chapter__demo">
                  <Pipeline compact />
                  <p className="chapter__demo-cap">A simplified model of this pipeline. Crash the worker mid-stage, or take a provider down, and watch it recover.</p>
                </div>
              )}
              {fig && !demo && (
                <figure className={`chapter__fig${fig.phone ? ' chapter__fig--phone' : ''}`} data-reveal="clip">
                  <Image src={fig.src} alt={fig.alt} width={fig.width} height={fig.height} sizes={fig.phone ? '(max-width: 767px) 70vw, 28vw' : '(max-width: 767px) 100vw, 75vw'} />
                  <figcaption><span className="fig mono">Fig. {n + 2}</span> {fig.caption}</figcaption>
                </figure>
              )}
            </section>
          );
        })}
      </div>

      {related.length > 0 && (
        <section className="related" aria-labelledby="related-title">
          <h2 id="related-title" className="related__title">Related reading</h2>
          <ul className="covers covers--small">
            {related.map((b) => (
              <li key={b.id} className="cover">
                <button type="button" className="cover__btn" data-book-open={b.id} aria-haspopup="dialog">
                  {/* eslint-disable-next-line @next/next/no-img-element -- small static covers */}
                  <img src={b.cover} alt="" width={Math.round(260 * b.ratio)} height={260} loading="lazy" decoding="async" />
                  <span className="cover__title">{b.title}</span>
                  <span className="cover__author">{b.author}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link href={`/work/${next.slug}/`} className="next" data-tone="ink" data-volume data-cover={next.title}>
        <span className="next__label mono">Next project</span>
        <span className="next__title">{next.title} <span className="arrow" aria-hidden="true">→</span></span>
        <span className="next__sub">{next.summary}</span>
        <span className="next__progress" aria-hidden="true" />
        <span className="next__fill" aria-hidden="true" />
      </Link>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </article>
  );
}
