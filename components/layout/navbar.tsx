"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Projects", href: "#selected-work", active: true },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        hasScrolled
          ? "border-[#20242B] bg-[rgba(14,15,17,0.8)] backdrop-blur-[20px]"
          : "border-transparent bg-transparent backdrop-blur-0",
      ].join(" ")}
      data-node-id="1:167"
      data-opening-nav
    >
      <Container width="wide" className="relative">
        <div className="flex min-h-[5.5rem] flex-col justify-center py-4 sm:py-5">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-[1.5rem] leading-8 tracking-[-0.05em] text-text-primary transition-ui hover:text-text-secondary"
              data-node-id="1:169"
              data-opening-nav-brand
            >
              <span className="block overflow-hidden" data-opening-brand-mask>
                <span className="block" data-opening-brand-text>
                  Zaw Htike Aung
                </span>
              </span>
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
                        "type-nav nav-link uppercase",
                        active ? "nav-link-active" : "",
                      ].join(" ")}
                      data-opening-nav-item
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="mailto:zawhtikeaung.dev@gmail.com"
              className="type-button group inline-flex min-h-10 items-center justify-center rounded-[8px] border border-border-soft bg-[rgba(27,28,30,0.82)] px-6 py-2.5 text-text-primary backdrop-blur-[12px] transition-[background-color,border-color] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-strong hover:bg-[rgba(27,28,30,0.87)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-text-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              data-node-id="1:180"
              data-opening-nav-cta
            >
              <span className="transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-px">
                Let&apos;s Talk
              </span>
            </a>
          </div>

          <nav aria-label="Primary mobile" className="mt-4 lg:hidden">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navItems.map(({ label, href, active }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={[
                      "type-nav nav-link pb-1 uppercase",
                      active ? "nav-link-active" : "",
                    ].join(" ")}
                    data-opening-nav-item
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
