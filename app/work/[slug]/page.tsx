import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MiniShelf } from '@/components/Shelf';
import { projects, site } from '@/data/site';

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
      {/* The cover: the same ink as the spine you pulled. */}
      <header className="case-cover" data-tone="ink">
        <p className="case-cover__call"><span>ZHA v.{p.vol}</span><span>{p.years}</span></p>
        <h1 className="case-cover__title">{p.title}</h1>
        <p className="case-cover__sub" data-split="lines" data-intro data-delay="0.15">{p.subtitle}</p>
        <p className="case-cover__by"><span>by {site.name}</span><span>{p.client}</span></p>
      </header>

      {/* Title page, set as the catalogue card. */}
      <section className="case-title" aria-label="About this project">
        <dl className="case-title__card">
          <div><dt>Role</dt><dd>{p.role}</dd></div>
          <div><dt>For</dt><dd>{p.client}</dd></div>
          <div><dt>Years</dt><dd>{p.years}</dd></div>
          <div><dt>Live</dt><dd><a className="u-link" href={p.url} target="_blank" rel="noopener noreferrer">{p.urlLabel}</a></dd></div>
          <div className="case-title__subjects"><dt>Subjects</dt><dd>{p.subjects.map((s, n) => <span key={s}>{n + 1}. {s} </span>)}</dd></div>
        </dl>
        <dl className="case-title__facts">
          {p.facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>
      </section>

      <figure className="case-hero" data-reveal="clip">
        <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} sizes="100vw" />
        <figcaption><span className="fig">Fig. 1</span> {p.cover.caption}</figcaption>
      </figure>

      <nav className="case-toc" aria-label="Chapters">
        <h2 className="case-toc__head">Contents</h2>
        <ol>
          {p.chapters.map((c, n) => (
            <li key={c.title}><a href={`#ch-${n + 1}`} data-no-transition className="u-link"><span className="case-toc__n">{n + 1}</span> {c.title}</a></li>
          ))}
        </ol>
      </nav>

      <div className="chapters">
        {p.chapters.map((c, n) => {
          const fig = p.figures[n];
          return (
            <section key={c.title} id={`ch-${n + 1}`} className="chapter" aria-labelledby={`ch-${n + 1}-t`}>
              <p className="chapter__n" aria-hidden="true">{n + 1}</p>
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
                <aside className="chapter__notes" aria-label="Margin note">
                  {c.notes.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
                </aside>
              )}
              {fig && (
                <figure className={`chapter__fig${fig.phone ? ' chapter__fig--phone' : ''}`} data-reveal="clip">
                  <Image src={fig.src} alt={fig.alt} width={fig.width} height={fig.height} sizes={fig.phone ? '(max-width: 767px) 70vw, 28vw' : '(max-width: 767px) 100vw, 75vw'} />
                  <figcaption><span className="fig">Fig. {n + 2}</span> {fig.caption}</figcaption>
                </figure>
              )}
            </section>
          );
        })}
      </div>

      <section className="further" aria-labelledby="further-title">
        <h2 id="further-title" className="further__title">Further reading from the shelf</h2>
        <MiniShelf cutters={p.related} label={`Books related to ${p.title}`} />
      </section>

      <Link href={`/work/${next.slug}/`} className="next-vol" data-tone="ink" data-volume data-cover={next.title}>
        <span className="next-vol__label">Next volume, v.{next.vol}</span>
        <span className="next-vol__title">{next.title}</span>
        <span className="next-vol__sub">{next.summary}</span>
      </Link>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </article>
  );
}
