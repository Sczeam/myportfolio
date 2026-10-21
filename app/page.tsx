import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Shelf } from '@/components/Shelf';
import { books, contents, projects, site, skillIndex } from '@/data/site';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

export default function Home() {
  const reading = books.find((b) => b.reading)!;
  const filed = [reading, ...books.filter((b) => !b.reading)];
  return (
    <>
      {/* ---------------------------------------------------------- 1. the bookcase */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__type">
          <h1 id="hero-title" className="hero__name">{site.name}</h1>
          <div className="hero__aside">
            <p className="hero__role" data-reveal="fade" data-intro data-delay="0.5">
              Full stack developer in Manchester. I design and build, and I care how a product feels as much as how it works.
            </p>
            <p className="hero__status" data-reveal="fade" data-intro data-delay="0.65">
              <span className="dot" aria-hidden="true" /> {site.status}
            </p>
          </div>
        </div>
        <Shelf intro />
      </section>

      {/* ---------------------------------------------------------- 2. built */}
      <section className="built" id="work" aria-labelledby="work-title">
        <header className="sec-head">
          <h2 id="work-title" className="sec-head__title" data-split="lines">Built</h2>
          <p className="sec-head__lede" data-reveal="up">
            Three live products with my name on the spine. On each one I worked across the whole stack, from the first layout to the deploy.
          </p>
        </header>
        <ol className="volumes">
          {projects.map((p) => (
            <li key={p.slug} className={`volume volume--${p.vol}`}>
              <Link href={`/work/${p.slug}/`} className="volume__cover" data-cover={p.title} tabIndex={-1} aria-label={`${p.title}, case study cover`}>
                <figure data-volume data-reveal="clip">
                  <Image src={p.cover.src} alt="" width={p.cover.width} height={p.cover.height} sizes="(max-width: 767px) 100vw, 60vw" />
                </figure>
              </Link>
              <article className="card" data-reveal="up">
                <p className="card__call"><span>ZHA v.{p.vol}</span><span>{p.years}</span></p>
                <h3 className="card__title">
                  <Link href={`/work/${p.slug}/`} data-cover={p.title} className="card__link">{p.title}</Link>
                </h3>
                <p className="card__by">{p.client}. {p.role.split('.')[0]}.</p>
                <p className="card__note">{p.summary}</p>
                <p className="card__subjects">
                  <span className="card__subjects-head">Subjects</span>{' '}
                  {p.subjects.slice(0, 6).map((s, i) => <span key={s}>{i + 1}. {s} </span>)}
                </p>
                <span className="card__open" aria-hidden="true">Open the volume <span className="arrow">→</span></span>
                <span className="card__hole" aria-hidden="true" />
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------------------------------------------------- 3. about */}
      <section className="about" id="about" aria-labelledby="about-title">
        <figure className="about__portrait" data-reveal="clip">
          <div className="about__frame">
            <Image src="/images/zaw.webp" alt="Zaw Htike Aung in a blue linen shirt with a canvas bag, on a coastal path below white chalk cliffs." width={1000} height={1333} sizes="(max-width: 767px) 70vw, 30vw" data-parallax="0.06" />
          </div>
        </figure>
        <div className="about__text">
          <h2 id="about-title" className="about__title">About</h2>
          <p className="about__statement" data-split="lines">
            I like owning a feature from the first sketch to the deploy. On One Click AI I built the React interface, the Laravel APIs, an AI pipeline that recovers from crashes, payments and CI. Before that I spent a year building production React at Kewordal. Next, I want to do it inside a team.
          </p>
          <dl className="facts">
            <div><dt>Registered users on One Click AI</dt><dd>3,600+</dd></div>
            <div><dt>BSc Computer Software Engineering, Portsmouth</dt><dd>2:1</dd></div>
            <div><dt>Books on the shelf, one still open</dt><dd>{books.length}</dd></div>
            <div><dt>Visa sponsorship needed in the UK</dt><dd>None</dd></div>
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------------- 4. contents + index */}
      <section className="matter" aria-label="Experience and skills">
        <div className="toc">
          <h2 className="matter__title">Contents</h2>
          <ol className="contents__list">
            {contents.map((c) => (
              <li key={c.title} className="contents__item">
                <p className="contents__line">
                  {c.href
                    ? <Link href={c.href} data-cover={c.title} className="contents__title u-link">{c.title}</Link>
                    : <span className="contents__title">{c.title}</span>}
                  <span className="contents__leader" aria-hidden="true" />
                  <span className="contents__years">{c.years}</span>
                </p>
                <p className="contents__detail">{c.detail}. {c.place}.</p>
                {c.note && <p className="contents__note">{c.note}</p>}
              </li>
            ))}
          </ol>
        </div>
        <div className="index">
          <h2 className="matter__title">Index</h2>
          <p className="index__how">Numbers are volumes on the shelf: 1 One Click AI, 2 Moethuzar, 3 Avenora.</p>
          <ul className="index__list">
            {skillIndex.map((s) => (
              <li key={s.term}>
                <span className="index__term">{s.term}</span>
                {s.vols ? <span className="index__refs">{s.vols.join(', ')}</span> : <span className="index__see">see <em>{s.see}</em></span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- 5. reading */}
      <section className="reading" id="reading" aria-labelledby="reading-title">
        <header className="reading__head">
          <h2 id="reading-title" className="sec-head__title" data-split="lines">Reading</h2>
          <p className="reading__lede">
            Code, design, people and a few long novels. The shelf is filed by Dewey call number, the way a library would file it. Every book opens to a short note on what it taught me and where it shows up in my work.
          </p>
        </header>
        <ol className="biblio">
          {filed.map((b) => (
            <li key={b.cutter}>
              <button
                type="button"
                className={`biblio__row${b.reading ? ' biblio__row--open' : ''}`}
                style={{ '--cloth': b.cloth } as Vars}
                data-book-open={b.cutter}
                aria-haspopup="dialog"
              >
                <span className="biblio__call">{b.call}<br />{b.cutter}</span>
                <span className="biblio__title"><cite>{b.title}</cite></span>
                <span className="biblio__author">{b.author}</span>
                <span className="biblio__subject">{b.reading ? 'Reading now' : b.subject}<span className="biblio__more" aria-hidden="true">Read my note →</span></span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
