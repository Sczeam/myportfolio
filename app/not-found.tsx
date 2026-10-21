import type { Metadata } from 'next';
import Link from 'next/link';
import { Shelf } from '@/components/Shelf';

export const metadata: Metadata = {
  title: 'Not on the shelf',
  description: 'Nothing is filed at this address. Head back to the shelf to find the work, the reading list and how to get in touch.',
};

export default function NotFound() {
  return (
    <section className="missing" aria-labelledby="missing-title">
      <p className="missing__call">Call number 404</p>
      <h1 id="missing-title" className="missing__title">Nothing is filed here.</h1>
      <p className="missing__text">
        The gap on the shelf is where this page would be. It was never written, or it has been moved.
      </p>
      <Link href="/" className="missing__back u-link">Back to the shelf</Link>
      <Shelf gapAt={9} />
    </section>
  );
}
