import Link from 'next/link';
import type { CSSProperties } from 'react';
import { books, projects, type Book, type Project } from '@/data/site';

const thickness = (pages: number) => Math.round(26 + pages * 0.075);

// Spines carry the first author's surname, the way publishers set them.
function surname(author: string) {
  const first = author.split(/,| and | with /)[0].replace(/ Jr\.$/, '').trim();
  const m = first.match(/\b(da|de|van|von)\s+\S+$/);
  return m ? m[0] : first.split(' ').slice(-1)[0];
}

type Vars = CSSProperties & Record<`--${string}`, string | number>;

// A book is a small 3D object: the spine faces you; the real front cover is hinged on the
// spine's right edge and swings into view when the book is pulled from the shelf. Covers load
// after the page does (motion/shelf.ts), so they never compete with the first paint.
export function BookSpine({ book }: { book: Book }) {
  const style: Vars = {
    '--t': thickness(book.pages),
    '--h': book.height,
    '--len': book.spine.length + surname(book.author).length * 0.6,
    '--cloth': book.cloth,
    '--ink': book.ink,
    '--ratio': book.ratio,
  };
  const caption = `${book.title}. ${book.author}. ${book.call} ${book.subject}.${book.reading ? ' Reading now.' : ''}`;
  return (
    <li className={`spine spine--${book.face}${book.reading ? ' spine--reading' : ''}`} style={style} data-caption={caption} data-book>
      <div className="spine__lean" data-weight={(thickness(book.pages) / 50).toFixed(2)}>
        <button
          type="button"
          className="book"
          data-book-open={book.cutter}
          aria-haspopup="dialog"
        >
          <span className="book__spine">
            {book.reading && <span className="ribbon" aria-hidden="true" />}
            <span className="spine__title"><cite>{book.spine}</cite></span>
            <span className="spine__author">{surname(book.author)}</span>
            <span className="spine__label" aria-hidden="true">{book.call}<br />{book.cutter}</span>
            <span className="sr-only">. Open my note</span>
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element -- a small static cover, sized by CSS */}
          <img className="book__cover" data-src={book.cover} alt="" width={Math.round(520 * book.ratio)} height={520} decoding="async" />
        </button>
      </div>
      {book.reading && <span className="spine__note">Reading now</span>}
    </li>
  );
}

export function VolumeSpine({ project }: { project: Project }) {
  const style: Vars = { '--t': 92, '--h': project.spineHeight, '--len': project.title.length + 4, '--ratio': 0.68 };
  return (
    <li className="spine spine--built" style={style} data-caption={`${project.title}. Built by me, ${project.years}. Open the case study.`}>
      <div className="spine__lean" data-weight="1.6">
        <Link href={`/work/${project.slug}/`} className="book" data-volume data-cover={project.title}>
          <span className="book__spine">
            <span className="spine__title">{project.title}</span>
            <span className="spine__author">{project.years.split(' ')[0]}</span>
            <span className="spine__label" aria-hidden="true">ZHA<br />v.{project.vol}</span>
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element -- a small static cover, sized by CSS */}
          <img className="book__cover" data-src={`/work/${project.slug}/book.webp`} alt="" width={354} height={520} decoding="async" />
          <span className="sr-only">, case study</span>
        </Link>
      </div>
    </li>
  );
}

/** The bookcase in the hero: his volumes, a bookend, then the books he read in call-number order. */
export function Shelf({ intro = false, gapAt }: { intro?: boolean; gapAt?: number }) {
  const read = books.filter((b) => !b.reading).length;
  return (
    <div className="shelf" data-shelf {...(intro ? { 'data-shelf-intro': '' } : {})}>
      <div className="shelf__scroll">
        <ol className="shelf__row" aria-label="Bookshelf: volumes I built, then the books I have read">
          {projects.map((p) => <VolumeSpine key={p.slug} project={p} />)}
          <li className="bookend" aria-hidden="true" />
          {books.map((b, i) => (
            gapAt === i
              ? <li key="gap" className="spine spine--gap" aria-hidden="true" style={{ '--t': 58, '--h': 0.9 } as Vars} />
              : <BookSpine key={b.cutter} book={b} />
          ))}
        </ol>
      </div>
      <div className="shelf__plank" aria-hidden="true" />
      <div className="shelf__legend">
        <p className="shelf__group shelf__group--built"><strong>Built</strong> {projects.length} volumes</p>
        <p className="shelf__group"><strong>Read</strong> {read}, one open. Filed by call number.</p>
        <p className="shelf__caption" data-shelf-caption aria-hidden="true"><span className="say-pointer">Point at a book to pull it, click to read my note.</span><span className="say-touch">Swipe along the shelf, tap a book to read my note.</span></p>
      </div>
    </div>
  );
}

/** A short run of books, used under case studies. */
export function MiniShelf({ cutters, label }: { cutters: string[]; label: string }) {
  const run = cutters.map((c) => books.find((b) => b.cutter === c)!).filter(Boolean);
  return (
    <div className="shelf shelf--mini" data-shelf>
      <div className="shelf__scroll">
        <ol className="shelf__row" aria-label={label}>
          {run.map((b) => <BookSpine key={b.cutter} book={b} />)}
        </ol>
      </div>
      <div className="shelf__plank" aria-hidden="true" />
      <div className="shelf__legend">
        <p className="shelf__caption" data-shelf-caption aria-hidden="true">{run.length} books from the shelf. Open one to read my note.</p>
      </div>
    </div>
  );
}
