"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";
import heroImage from "@/public/images/hero.png";

gsap.registerPlugin(CustomEase);

const headlineLines = [
  "Design led",
  "frontend",
  "with clarity",
  "and restraint.",
];

const ctaClassName =
  "button-base type-button transition-ui inline-flex w-full sm:w-auto";

const heroEasePrimary = CustomEase.create("hero-ease-primary", "0.22,1,0.36,1");
const heroEaseCinematic = CustomEase.create(
  "hero-ease-cinematic",
  "0.16,1,0.3,1",
);

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const atmosphereRef = useRef<HTMLDivElement | null>(null);
  const headlineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const subheadlineRef = useRef<HTMLParagraphElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      if (atmosphereRef.current) {
        timeline.fromTo(
          atmosphereRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.92,
            ease: heroEaseCinematic,
          },
        );
      }

      timeline.fromTo(
        headlineRefs.current.filter(Boolean),
        {
          yPercent: 112,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.96,
          ease: heroEasePrimary,
          stagger: 0.08,
        },
        "-=0.5",
      );

      if (subheadlineRef.current) {
        timeline.fromTo(
          subheadlineRef.current,
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.62,
            ease: heroEasePrimary,
          },
          "-=0.48",
        );
      }

      if (actionsRef.current) {
        timeline.fromTo(
          actionsRef.current,
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.46,
            ease: heroEasePrimary,
          },
          "-=0.34",
        );
      }
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="hero-height relative overflow-clip border-b border-border-faint"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,17,0.62)_0%,rgba(14,15,17,0.92)_68%,rgba(14,15,17,1)_100%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-[radial-gradient(circle_at_34%_40%,rgba(124,138,154,0.12),transparent_42%),radial-gradient(circle_at_74%_58%,rgba(163,147,126,0.1),transparent_36%)] md:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(58,64,75,0.55),transparent)]" />
      </div>

      <Container width="wide" className="relative h-full">
        <div className="editorial-grid h-full items-end pb-10 pt-28 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-0 xl:pb-20">
          <div className="relative z-10 col-span-12 flex flex-col justify-end lg:col-span-5 lg:col-start-2 xl:col-span-4">
            <div className="max-w-[33rem] lg:max-w-[27rem] xl:max-w-[28.5rem]">
              <Eyebrow className="mb-5 inline-flex items-center gap-2.5 text-text-muted/90 sm:mb-6 lg:mb-5">
                <span>Zaw Htike Aung</span>
                <span
                  aria-hidden="true"
                  className="hidden h-px w-6 bg-border-strong/70 lg:block"
                />
              </Eyebrow>

              <h1
                id="hero-heading"
                className="type-display-hero inline-flex max-w-none flex-col items-start text-[clamp(3.15rem,4vw,4.85rem)] leading-[0.86] tracking-[-0.058em] text-text-primary"
              >
                {headlineLines.map((line, index) => (
                  <span
                    key={line}
                    className={cn(
                      "inline-block overflow-hidden",
                      index === 1 ? "pl-[0.02em]" : "",
                      index === 2 ? "pl-[0.22em]" : "",
                      index === 3 ? "pl-[0.34em]" : "",
                    )}
                  >
                    <span
                      ref={(element) => {
                        headlineRefs.current[index] = element;
                      }}
                      className="block whitespace-nowrap will-change-transform"
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              <p
                ref={subheadlineRef}
                className="type-subheadline mt-7 max-w-[24.5rem] text-balance text-text-secondary sm:mt-8 lg:mt-9"
              >
                I build refined websites and product experiences through
                frontend, design sensitivity, and motion.
              </p>

              <div
                ref={actionsRef}
                className="mt-10 flex flex-col items-start gap-3 sm:mt-11 sm:flex-row sm:gap-4"
              >
                <a
                  href="#selected-work"
                  className={cn(ctaClassName, "button-primary")}
                >
                  View selected work
                </a>
                <a
                  href="#about"
                  className={cn(ctaClassName, "button-secondary")}
                >
                  About me
                </a>
              </div>
            </div>
          </div>

          <div className="relative col-span-12 hidden h-full min-h-[28rem] lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7 lg:block">
            <div
              ref={atmosphereRef}
              className="absolute inset-y-[12%] right-[2%] left-[16%] overflow-hidden opacity-100"
            >
              <div className="absolute inset-y-[2%] right-[0%] left-[20%] overflow-hidden rounded-xs bg-surface-1">
                <Image
                  src={heroImage}
                  alt="Portrait of Zaw Htike Aung"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1536px) 32vw, (min-width: 1024px) 30vw, 0vw"
                  className="object-cover object-[44%_34%] opacity-100 saturate-82 brightness-[0.96] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,15,17,0.96)_0%,rgba(14,15,17,0.62)_16%,rgba(14,15,17,0.06)_42%,rgba(14,15,17,0.44)_74%,rgba(14,15,17,0.9)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,17,0.44)_0%,rgba(14,15,17,0.01)_26%,rgba(14,15,17,0.18)_70%,rgba(14,15,17,0.72)_100%)]" />
              </div>
              <div className="absolute inset-y-[14%] left-[42%] w-px bg-[linear-gradient(180deg,transparent,rgba(124,138,154,0.14),transparent)]" />
              <div className="absolute top-[34%] left-[48%] right-[2%] h-px bg-[linear-gradient(90deg,transparent,rgba(163,147,126,0.14),transparent)]" />
              <div className="absolute right-[0%] top-[16%] h-72 w-72 bg-[radial-gradient(circle,rgba(124,138,154,0.05)_0%,transparent_72%)]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
