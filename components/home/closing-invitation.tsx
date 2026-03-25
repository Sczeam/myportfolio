import Link from "next/link";

import { Container } from "@/components/ui/container";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sczeam",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaw-htike-aung",
  },
] as const;

export function ClosingInvitation() {
  return (
    <section
      id="contact"
      data-closing-invitation
      className="relative overflow-clip pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-[6rem] lg:pt-[8rem]"
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
      </Container>
    </section>
  );
}
