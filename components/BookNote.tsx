'use client';
// Opening a book: any [data-book-open] element (a spine on the shelf, a row in the reading list)
// opens that book as a spread. The real cover on the left page, my note on the right. The cover
// flies in from wherever the book was on screen; Previous and Next turn through the shelf.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ease, prefersReducedMotion, startScroll, stopScroll } from '@/engine';
import { books, projects } from '@/data/site';

const order = [...books].sort((a, b) => Number(!!b.reading) - Number(!!a.reading)); // the open book first

export function BookNote() {
  const dialog = useRef<HTMLDialogElement>(null);
  const cover = useRef<HTMLDivElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(-1);
  const pathname = usePathname();
  const book = index >= 0 ? order[index] : null;

  const close = useCallback(() => {
    const d = dialog.current;
    if (!d?.open) return;
    const done = () => {
      d.close();
      setIndex(-1);
      startScroll();
      opener.current?.focus({ preventScroll: true, focusVisible: false } as FocusOptions);
    };
    if (prefersReducedMotion()) return done();
    gsap.to(d, { autoAlpha: 0, duration: 0.3, ease: ease.soft, onComplete: done });
  }, []);

  // Open from any book on the page (event delegation survives page transitions).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-book-open]');
      if (!el || !dialog.current) return;
      e.preventDefault();
      const i = order.findIndex((b) => b.cutter === el.dataset.bookOpen);
      if (i < 0) return;
      opener.current = el;
      const from = (el.closest('.spine') ?? el).getBoundingClientRect();
      setIndex(i);
      stopScroll();
      const d = dialog.current;
      d.showModal();
      if (prefersReducedMotion()) return;
      gsap.fromTo(d, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: ease.soft });
      requestAnimationFrame(() => {
        const c = cover.current;
        if (!c) return;
        const to = c.getBoundingClientRect();
        gsap.fromTo(c,
          { x: from.left - to.left, y: from.top - to.top, scaleX: from.width / to.width, scaleY: from.height / to.height, rotationY: -70, transformOrigin: '0% 0%' },
          { x: 0, y: 0, scaleX: 1, scaleY: 1, rotationY: 0, duration: 0.9, ease: ease.out });
        gsap.from(page.current!.children, { y: 18, autoAlpha: 0, duration: 0.7, ease: ease.out, stagger: 0.05, delay: 0.25 });
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Turning the page: a short fade and lift between notes.
  const turn = (dir: 1 | -1) => {
    const next = (index + dir + order.length) % order.length;
    if (prefersReducedMotion()) return setIndex(next);
    gsap.to([cover.current, page.current], {
      autoAlpha: 0, x: -14 * dir, duration: 0.2, ease: ease.soft,
      onComplete: () => {
        setIndex(next);
        requestAnimationFrame(() => gsap.fromTo([cover.current, page.current], { autoAlpha: 0, x: 14 * dir }, { autoAlpha: 1, x: 0, duration: 0.45, ease: ease.out }));
      },
    });
  };

  // Leaving the page (a "where it shows up" link) closes the book.
  useEffect(() => {
    const d = dialog.current;
    if (d?.open) { d.close(); startScroll(); } // onClose resets the open book
  }, [pathname]);

  const used = book?.usedIn ? projects.find((p) => p.slug === book.usedIn!.slug) : undefined;
  const chapter = used && book?.usedIn ? used.chapters[book.usedIn.chapter - 1] : undefined;

  return (
    <dialog
      ref={dialog}
      className="note"
      aria-labelledby="note-title"
      data-lenis-prevent
      onCancel={(e) => { e.preventDefault(); close(); }}
      onClose={() => setIndex(-1)}
      onClick={(e) => { if (e.target === dialog.current) close(); }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') turn(1);
        if (e.key === 'ArrowLeft') turn(-1);
      }}
    >
      {book && (
        <div className="note__spread">
          <div className="note__left">
            <div ref={cover} className="note__cover" style={{ aspectRatio: `${book.ratio}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- the same small cover the shelf already loaded */}
              <img src={book.cover} alt={`Cover of ${book.title}`} />
            </div>
          </div>
          <div ref={page} className="note__page">
            <p className="note__call">
              <span>{book.call} {book.cutter}</span>
              <span className={book.reading ? 'note__open' : undefined}>{book.reading ? 'Reading now' : 'Read'}</span>
            </p>
            <h2 id="note-title" className="note__title"><cite>{book.title}</cite></h2>
            <p className="note__author">{book.author}</p>
            <p className="note__text">{book.note}</p>
            {used && chapter && (
              <p className="note__used">
                <span className="note__used-head">Where it shows up</span>
                <Link className="u-link" href={`/work/${used.slug}/#ch-${book.usedIn!.chapter}`} data-cover={used.title} onClick={() => dialog.current?.close()}>
                  {used.title}, chapter {book.usedIn!.chapter}: {chapter.title}
                </Link>
              </p>
            )}
            <div className="note__nav">
              <button type="button" className="note__btn" onClick={() => turn(-1)}><span aria-hidden="true">←</span> Previous</button>
              <span className="note__count">{index + 1} of {order.length}</span>
              <button type="button" className="note__btn" onClick={() => turn(1)}>Next <span aria-hidden="true">→</span></button>
            </div>
          </div>
          <button type="button" className="note__close" onClick={close}>Close</button>
        </div>
      )}
    </dialog>
  );
}
