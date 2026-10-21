import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This address does not exist. Go back to the home page for the work, the engineering decisions behind it, and how to get in touch.',
};

export default function NotFound() {
  return (
    <section className="missing" aria-labelledby="missing-title">
      <ol className="missing__log mono" aria-label="Request log">
        <li><span className="runner__t">0.0</span> GET this page</li>
        <li className="tone-fail"><span className="runner__t">0.1</span> 404: no route matches</li>
        <li><span className="runner__t">0.1</span> no checkpoint to resume from</li>
      </ol>
      <h1 id="missing-title" className="missing__title">This page doesn’t exist.</h1>
      <p className="missing__text">Some jobs can be resumed. This one has nothing to resume, so start again from the home page.</p>
      <Link href="/" className="btn btn--solid missing__back"><span className="btn__fill" aria-hidden="true" /><span>Back to the home page</span></Link>
    </section>
  );
}
