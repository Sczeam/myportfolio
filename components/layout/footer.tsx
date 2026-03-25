import Link from "next/link";

import { Container } from "@/components/ui/container";

const footerSocial = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zaw-htike-aung" },
  { label: "GitHub", href: "https://github.com/Sczeam" },
  { label: "Mail", href: "mailto:hello@zhtike.aung" },
] as const;

const footerLinkClassName =
  "text-[0.98rem] leading-[1.5] tracking-[-0.01em] text-accent transition-[color] duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-text-primary focus-visible:outline-none focus-visible:text-text-primary";

export function Footer() {
  return (
    <footer className="relative bg-canvas pb-4 pt-10 sm:pt-12 lg:pb-6 lg:pt-[3.75rem]">
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="h-px w-full bg-[rgba(68,71,76,0.3)]" />

        <div className="grid gap-10 pb-2 pt-10 sm:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.55fr)_auto] lg:items-end lg:gap-[4rem]">
          <div>
            <p className="font-display text-[2rem] leading-none tracking-[-0.05em] text-text-primary">
              Zaw Htike Aung
            </p>
            <p className="mt-5 font-display text-[1.55rem] italic leading-[1.3] tracking-[-0.02em] text-accent">
              Full-stack craft with architectural intent.
            </p>
          </div>

          <div>
            <p className="type-label text-text-subtle">Social</p>
            <ul className="mt-4 space-y-2.5">
              {footerSocial.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="type-label self-end whitespace-nowrap text-text-subtle lg:text-right">
            © 2024 Zaw Htike Aung.
          </p>
        </div>
      </Container>
    </footer>
  );
}
