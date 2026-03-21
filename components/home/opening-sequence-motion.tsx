"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);
const openingEasePrimary = CustomEase.create(
  "opening-ease-primary",
  "0.22,1,0.36,1",
);
const openingEaseCinematic = CustomEase.create(
  "opening-ease-cinematic",
  "0.16,1,0.3,1",
);

export function OpeningSequenceMotion() {
  useLayoutEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-opening-hero]");
    const brandMask = document.querySelector<HTMLElement>("[data-opening-brand-mask]");
    const brandText = document.querySelector<HTMLElement>("[data-opening-brand-text]");
    const navItems = gsap.utils.toArray<HTMLElement>("[data-opening-nav-item]");
    const navCta = document.querySelector<HTMLElement>("[data-opening-nav-cta]");
    const heroAtmosphere = document.querySelector<HTMLElement>(
      "[data-opening-hero-atmosphere]",
    );
    const heroContent = document.querySelector<HTMLElement>(
      "[data-opening-hero-content]",
    );
    const thesis = document.querySelector<HTMLElement>("[data-opening-thesis]");
    const thesisContent = document.querySelector<HTMLElement>(
      "[data-opening-thesis-content]",
    );
    const selectedWorkIntro = document.querySelector<HTMLElement>(
      "[data-selected-work-intro]",
    );
    const heroLines = gsap.utils.toArray<HTMLElement>(
      "[data-opening-hero-line]",
    );
    const heroLineMasks = gsap.utils.toArray<HTMLElement>(
      "[data-opening-hero-line-mask]",
    );
    const heroCopy = document.querySelector<HTMLElement>(
      "[data-opening-hero-copy]",
    );
    const heroGlow = document.querySelector<HTMLElement>(
      "[data-opening-hero-glow]",
    );

    if (
      !hero ||
      !brandMask ||
      !brandText ||
      !heroAtmosphere ||
      !heroContent ||
      !thesis ||
      !thesisContent ||
      !selectedWorkIntro ||
      heroLines.length === 0 ||
      heroLineMasks.length !== heroLines.length ||
      !heroCopy ||
      !heroGlow ||
      !navCta
    ) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const openingWaveTexts = [brandText, ...heroLines];
    const openingWaveMasks = [brandMask, ...heroLineMasks];
    const openingWaveClearAt = 0.92 + 0.1 * (openingWaveMasks.length - 1) + 0.08;

    const context = gsap.context(() => {
      gsap.set(openingWaveTexts, {
        y: 28,
        opacity: 0,
      });
      gsap.set(openingWaveMasks, {
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.set([...navItems, navCta], {
        y: -10,
        opacity: 0,
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
        openingWaveTexts,
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
        openingWaveMasks,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.92,
          stagger: 0.1,
          ease: openingEaseCinematic,
        },
        0,
      );

      timeline.set(
        openingWaveMasks,
        {
          clearProps: "clipPath",
        },
        openingWaveClearAt,
      );

      timeline.set(
        openingWaveTexts,
        {
          clearProps: "transform,opacity",
        },
        openingWaveClearAt,
      );

      timeline.to(
        [...navItems, navCta],
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

      gsap.to(heroAtmosphere, {
        y: 96,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(heroContent, {
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: thesis,
          start: "top 85%",
          end: "top 35%",
          scrub: 0.8,
        },
      });

      gsap.to(thesisContent, {
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: selectedWorkIntro,
          start: "top 85%",
          end: "top 35%",
          scrub: 0.8,
        },
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
