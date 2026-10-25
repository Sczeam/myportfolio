import Image from 'next/image';
import Link from 'next/link';
import { Pipeline } from '@/components/Pipeline';
import { books, decisions, experience, projects, proof, site, skills } from '@/data/site';

export default function Home() {
  const [lead, ...rest] = projects;
  const reading = [books.find((b) => b.reading)!, ...books.filter((b) => !b.reading)];
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__top">
          <h1 id="hero-title" className="hero__name">{site.name}</h1>
          <div className="hero__intro">
            <p className="hero__role">
              Full stack developer in Manchester. Laravel, React and TypeScript.
            </p>
            <p className="hero__claim">
              I build products that keep working when things fail. Try it: the job below is a model of the pipeline I run in production.
            </p>
            <div className="hero__ctas">
              <a className="btn btn--solid" href={`mailto:${site.email}`}><span className="btn__fill" aria-hidden="true" /><span>Email me</span></a>
              <Link className="btn" href="#work"><span className="btn__fill" aria-hidden="true" /><span>See the work</span></Link>
            </div>
            <p className="hero__status">
              <span className="dot" aria-hidden="true" /> {site.status}. {site.rightToWork}.
            </p>
          </div>
        </div>
        <div className="hero__runner">
          <Pipeline />
        </div>
      </section>

      {/* ---------------------------------------------------------- proof */}
      <section className="proof" aria-label="In numbers">
        <dl className="proof__list">
          {proof.map((p) => (
            <div key={p.label} data-reveal="up">
              <dt>{p.label}</dt>
              <dd>{p.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------------------------------------------------------- work */}
      <section className="work" id="work" aria-labelledby="work-title">
        <header className="sec-head">
          <h2 id="work-title" className="sec-title" data-split="lines">Work</h2>
          <p className="sec-lede">Live products I designed, built and run. Each case study leads with the engineering.</p>
        </header>

        <article className="feature">
          <h3 className="feature__title"><Link href={`/work/${lead.slug}/`} data-cover={lead.title} className="title-link">{lead.title}</Link></h3>
          <Link href={`/work/${lead.slug}/`} className="feature__media" data-volume data-cover={lead.title} tabIndex={-1} aria-label={`${lead.title} case study`}>
            <figure data-reveal="clip">
              <Image src={lead.cover.src} alt={lead.cover.alt} width={lead.cover.width} height={lead.cover.height} sizes="(max-width: 767px) 100vw, 62vw" loading="eager" />
            </figure>
          </Link>
          <div className="feature__text">
            <p className="meta mono"><span>{lead.years}</span><span>{lead.client}</span></p>
            <p className="feature__sub">{lead.subtitle}</p>
            <ul className="ticks">
              {lead.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <span className="go" aria-hidden="true">Read the case study <span className="arrow">→</span></span>
          </div>
        </article>

        <ul className="rows">
          {rest.map((p) => (
            <li key={p.slug} className="row">
              <Link href={`/work/${p.slug}/`} className="row__link" data-cover={p.title}>
                <span className="row__years mono">{p.years}</span>
                <span className="row__title">{p.title}</span>
                <span className="row__sub">{p.summary}</span>
                <span className="row__arrow" aria-hidden="true">→</span>
                <span className="row__progress" aria-hidden="true" />
              </Link>
              <Link href={`/work/${p.slug}/`} className="row__media" data-volume data-cover={p.title} tabIndex={-1} aria-label={`${p.title} case study`}>
                <figure data-reveal="clip">
                  <Image src={p.cover.src} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} sizes="(max-width: 767px) 100vw, 40vw" loading="eager" />
                </figure>
              </Link>
              <ul className="row__ticks ticks">
                {p.highlights.slice(0, 3).map((h) => <li key={h}>{h}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------------------------------------------------- decisions */}
      <section className="decisions" id="engineering" aria-labelledby="eng-title">
        <header className="decisions__head">
          <h2 id="eng-title" className="sec-title" data-split="lines">Engineering decisions</h2>
          <p className="sec-lede">The problems that shaped the systems I build, what I decided, and what it bought.</p>
          <ol className="decisions__index" aria-label="Decisions">
            {decisions.map((d, n) => (
              <li key={d.title}><a href={`#decision-${n + 1}`} data-no-transition data-index={n}><span className="mono">{String(n + 1).padStart(2, '0')}</span> {d.title}</a></li>
            ))}
          </ol>
        </header>
        <ol className="decisions__list">
          {decisions.map((d, n) => {
            const p = projects.find((x) => x.slug === d.where.slug)!;
            return (
              <li key={d.title} id={`decision-${n + 1}`} className="decision" data-reveal="up" data-decision={n}>
                <h3 className="decision__title">{d.title}</h3>
                <ol className="decision__log mono" aria-label="What it looks like in the log">
                  <li className="tone-fail">{d.log[0]}</li>
                  <li className="tone-done">{d.log[1]}</li>
                </ol>
                <dl className="decision__body">
                  <div><dt>Problem</dt><dd>{d.problem}</dd></div>
                  <div><dt>Decision</dt><dd>{d.decision}</dd></div>
                  <div><dt>Result</dt><dd>{d.result}</dd></div>
                </dl>
                <Link className="u-link decision__where" href={`/work/${d.where.slug}/#ch-${d.where.chapter}`} data-cover={p.title}>
                  {d.more}, in {p.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ---------------------------------------------------------- skills + experience */}
      <section className="cv" id="about" aria-label="Skills and experience">
        <div className="cv__about">
          <h2 className="sec-title" data-split="lines">About</h2>
          <figure className="cv__portrait" data-reveal="clip">
            <Image src="/images/zaw.webp" alt="Zaw Htike Aung in a blue linen shirt with a canvas bag, on a coastal path below white chalk cliffs." width={1000} height={1333} sizes="(max-width: 767px) 60vw, 24vw" />
          </figure>
          <p className="cv__bio">
            I like owning a feature from the first sketch to the deploy, and I care how a product feels as much as how it works. On One Click AI I built the React interface, the Laravel APIs, an AI pipeline that recovers from crashes, payments and CI. Before that I spent a year building production React at Kewordal. Next, I want to do it inside a team.
          </p>
        </div>
        <div className="cv__main">
          <h3 className="cv__head">Skills</h3>
          <dl className="skills">
            {skills.map((g) => (
              <div key={g.group} className="skills__row">
                <dt>{g.group}</dt>
                <dd>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
          <h3 className="cv__head">Experience</h3>
          <ol className="xp">
            {experience.map((x) => (
              <li key={x.org} className="xp__row">
                <span className="xp__years mono">{x.years}</span>
                <div>
                  <p className="xp__org">
                    {x.href ? <Link href={x.href} className="u-link" data-cover={x.org}>{x.org}</Link> : x.org}
                    <span className="xp__role">{x.role}</span>
                  </p>
                  {x.text && <p className="xp__text">{x.text}</p>}
                </div>
                <span className="xp__place">{x.place}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- reading (secondary) */}
      <section className="reading" id="reading" aria-labelledby="reading-title">
        <header className="reading__head">
          <h2 id="reading-title" className="reading__title">Reading</h2>
          <p className="reading__lede">What I read alongside the work. Open any book for a short note on what I took from it.</p>
        </header>
        <ul className="covers">
          {reading.map((b) => (
            <li key={b.id} className={`cover${b.reading ? ' cover--now' : ''}`}>
              <button type="button" className="cover__btn" data-book-open={b.id} aria-haspopup="dialog">
                {/* eslint-disable-next-line @next/next/no-img-element -- small static covers */}
                <img src={b.cover} alt="" width={Math.round(260 * b.ratio)} height={260} loading="lazy" decoding="async" />
                <span className="cover__title">{b.title}</span>
                <span className="cover__author">{b.reading ? 'Reading now' : b.author}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
