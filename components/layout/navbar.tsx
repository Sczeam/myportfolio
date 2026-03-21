import Link from "next/link";

import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Projects", href: "#selected-work", active: true },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-[rgba(14,15,17,0.8)] backdrop-blur-[12px]"
      data-node-id="1:167"
    >
      <Container width="wide" className="relative">
        <div className="flex min-h-[5.5rem] flex-col justify-center py-4 sm:py-5">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-[1.5rem] leading-8 tracking-[-0.05em] text-text-primary transition-ui hover:text-text-secondary"
              data-node-id="1:169"
            >
              Zaw Htike Aung
            </Link>

            <nav
              aria-label="Primary"
              className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
              data-node-id="1:171"
            >
              <ul className="flex items-center">
                {navItems.map(({ label, href, active }) => (
                  <li key={label} className="pl-12 first:pl-0">
                    <Link
                      href={href}
                      className={[
                        "type-nav inline-flex border-b pb-[0.3125rem] uppercase transition-ui",
                        active
                          ? "border-accent text-text-primary"
                          : "border-transparent text-accent hover:border-accent/40 hover:text-text-secondary",
                      ].join(" ")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="mailto:zawhtikeaung.dev@gmail.com"
              className="type-button inline-flex min-h-10 items-center justify-center rounded-[8px] border border-border-soft bg-[rgba(31,32,34,0.42)] px-6 py-2.5 text-text-primary backdrop-blur-[12px] transition-ui hover:-translate-y-px hover:border-border-strong hover:bg-[rgba(31,32,34,0.56)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-text-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              data-node-id="1:180"
            >
              Let&apos;s Talk
            </a>
          </div>

          <nav aria-label="Primary mobile" className="mt-4 lg:hidden">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navItems.map(({ label, href, active }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={[
                      "type-nav inline-flex border-b pb-1 uppercase transition-ui",
                      active
                        ? "border-accent text-text-primary"
                        : "border-transparent text-accent hover:border-accent/40 hover:text-text-secondary",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
