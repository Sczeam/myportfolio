"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const openingEasePrimary = CustomEase.create(
  "opening-ease-primary",
  "0.22,1,0.36,1",
);
const openingEaseCinematic = CustomEase.create(
  "opening-ease-cinematic",
  "0.16,1,0.3,1",
);

export function OpeningSequenceMotion() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("[data-opening-nav]");
    const heroAtmosphere = document.querySelector<HTMLElement>(
      "[data-opening-hero-atmosphere]",
    );
    const heroLines = gsap.utils.toArray<HTMLElement>(
      "[data-opening-hero-line]",
    );
    const heroCopy = document.querySelector<HTMLElement>(
      "[data-opening-hero-copy]",
    );
    const heroGlow = document.querySelector<HTMLElement>(
      "[data-opening-hero-glow]",
    );

    if (!nav || !heroAtmosphere || heroLines.length === 0 || !heroCopy || !heroGlow) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.set(nav, {
        y: -10,
        opacity: 0,
      });
      gsap.set(heroLines, {
        y: 28,
        opacity: 0,
      });
      gsap.set(heroLines, {
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.set(heroCopy, {
        y: 16,
        opacity: 0,
      });
      gsap.set(heroAtmosphere, {
        opacity: 0,
        scale: 1.05,
        transformOrigin: "center center",
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: openingEaseCinematic,
        },
      });

      timeline.to(
        heroAtmosphere,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: openingEaseCinematic,
        },
        0,
      );

      timeline.to(
        heroLines,
        {
          y: 0,
          opacity: 1,
          duration: 0.92,
          stagger: 0.1,
          ease: openingEaseCinematic,
        },
        0,
      );

      timeline.to(
        heroLines,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.92,
          stagger: 0.1,
          ease: openingEaseCinematic,
        },
        0,
      );

      timeline.to(
        nav,
        {
          y: 0,
          opacity: 1,
          duration: 0.92,
          ease: openingEaseCinematic,
        },
        0.2,
      );

      timeline.to(
        heroCopy,
        {
          y: 0,
          opacity: 1,
          duration: 0.56,
          ease: openingEasePrimary,
        },
        0.64,
      );

      timeline.to(
        heroGlow,
        {
          opacity: 1,
          duration: 1.2,
          ease: openingEaseCinematic,
        },
        0,
      );
    });

    return () => context.revert();
  }, []);

  return null;
}
