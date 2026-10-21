import type { Metadata, Viewport } from 'next';
import { BookNote } from '@/components/BookNote';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Motion } from '@/components/Motion';
import { site } from '@/data/site';
import { mono, sans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}, full stack developer in Manchester`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: './' },
  openGraph: { type: 'website', siteName: site.name, locale: 'en_GB', images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name}, full stack developer` }] },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#F4F5F3' };

// Runs before first paint: hidden-until-revealed styles only apply when JS and motion are on.
const flags = `document.documentElement.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Full stack developer',
  url: site.url,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Manchester', addressCountry: 'GB' },
  sameAs: [site.github, site.linkedin],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Portsmouth' },
    { '@type': 'CollegeOrUniversity', name: 'Edinburgh Napier University' },
  ],
  knowsAbout: ['Laravel', 'React', 'TypeScript', 'Next.js', 'PostgreSQL'],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: flags }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div id="curtain" aria-hidden="true">
          <div className="curtain__panel">
            <span className="curtain__bar" />
            <span className="curtain__name" />
            <span className="curtain__title" />
          </div>
        </div>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        <BookNote />
        <Motion />
      </body>
    </html>
  );
}
