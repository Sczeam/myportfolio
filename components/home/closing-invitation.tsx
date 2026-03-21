import Link from "next/link";

import { Container } from "@/components/ui/container";

const contactLinks = [
  {
    label: "hello@zhtike.aung",
    href: "mailto:hello@zhtike.aung",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sczeam",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
] as const;

const footerNavigation = [
  { label: "Work", href: "#selected-work" },
  { label: "Stack", href: "#stack" },
  { label: "Security", href: "#process" },
] as const;

const footerSocial = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/Sczeam" },
  { label: "Mail", href: "mailto:hello@zhtike.aung" },
] as const;

const footerLinkClassName =
  "text-[0.98rem] leading-[1.5] tracking-[-0.01em] text-accent transition-[color] duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-text-primary focus-visible:outline-none focus-visible:text-text-primary";

export function ClosingInvitation() {
  return (
    <section
      id="contact"
      data-closing-invitation
      className="relative overflow-clip pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-[3rem] lg:pt-[8rem]"
      aria-labelledby="closing-invitation-heading"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div data-closing-invitation-fade>
          <p className="type-label text-accent">Engagement</p>

          <div className="mt-5 max-w-[34rem]">
            <h2
              id="closing-invitation-heading"
              className="font-display text-[clamp(4.15rem,8vw,6.9rem)] leading-[0.92] tracking-[-0.055em] text-text-primary"
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span className="italic">substantive.</span>
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-12 lg:mt-12">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-[clamp(1.75rem,2.2vw,2.25rem)] leading-none tracking-[-0.04em] text-text-primary transition-[color,background-color] duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent focus-visible:outline-none focus-visible:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-16 h-px w-full bg-[rgba(68,71,76,0.3)] lg:mt-[5.75rem]"
          data-closing-invitation-fade
        />

        <footer
          className="grid gap-10 pb-2 pt-10 sm:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.55fr)_minmax(0,0.55fr)_auto] lg:items-end lg:gap-[4rem] lg:pt-[3.75rem]"
          data-closing-invitation-fade
        >
          <div>
            <p className="font-display text-[2rem] leading-none tracking-[-0.05em] text-text-primary">
              Zaw Htike Aung
            </p>
            <p className="mt-5 font-display text-[1.55rem] italic leading-[1.3] tracking-[-0.02em] text-accent">
              Full-stack craft with architectural intent.
            </p>
          </div>

          <div>
            <p className="type-label text-text-subtle">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
        </footer>
      </Container>
    </section>
  );
}
