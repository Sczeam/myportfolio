'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

const links = [
  { href: '/#work', label: 'Work', match: '/work' },
  { href: '/#engineering', label: 'Engineering' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

export function Header() {
  const path = usePathname();
  const home = path === '/';
  return (
    <header className="frame">
      <Link href="/" className="frame__name" aria-current={home ? 'page' : undefined}>
        <Roll>{site.name}</Roll>
        <span className="frame__initials" aria-hidden="true">ZHA</span>
      </Link>
      <nav aria-label="Main">
        <ul className="frame__nav">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={l.match && path.startsWith(l.match) ? 'page' : undefined}>
                <Roll>{l.label}</Roll>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
