"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const thesisEasePrimary = CustomEase.create(
  "thesis-ease-primary",
  "0.22,1,0.36,1",
);

export function ThesisSectionMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-opening-thesis]");
    const lines = gsap.utils.toArray<HTMLElement>("[data-thesis-line-inner]");
    const note = document.querySelector<HTMLElement>("[data-opening-thesis-note]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || lines.length === 0 || !note || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set(lines, {
        opacity: 0,
        yPercent: 140,
      });
      gsap.set(note, {
        opacity: 0,
        y: 24,
      });
    };

    reset();

    let hasPlayed = false;

    const play = () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;

      const thesisReveal = gsap.timeline({
        defaults: {
          ease: thesisEasePrimary,
        },
      });

      thesisReveal.to(
        lines,
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.72,
          stagger: 0.12,
        },
        0,
      );

      thesisReveal.to(
        note,
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
        },
        0.28,
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 75%",
      invalidateOnRefresh: true,
      onEnter: play,
      onEnterBack: play,
    });

    return () => {
      trigger.kill();
      reset();
    };
  }, []);

  return null;
}
