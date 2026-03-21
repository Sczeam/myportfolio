"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const personalFrameEase = CustomEase.create(
  "personal-frame-ease",
  "0.16,1,0.3,1",
);

export function PersonalFrameMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-personal-frame]");
    if (!section) {
      return;
    }

    const media = section.querySelector<HTMLElement>("[data-personal-frame-media]");
    const copy = section.querySelector<HTMLElement>("[data-personal-frame-copy]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!media || !copy || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set([media, copy], {
        opacity: 0,
      });
    };

    reset();

    let hasPlayed = false;
    let reveal: gsap.core.Timeline | null = null;

    const play = () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;

      reveal = gsap.timeline({
        defaults: {
          ease: personalFrameEase,
          duration: 0.56,
        },
      });

      reveal.to(
        media,
        {
          opacity: 1,
        },
        0,
      );

      reveal.to(
        copy,
        {
          opacity: 1,
        },
        0.12,
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      invalidateOnRefresh: true,
      onEnter: play,
    });

    return () => {
      trigger.kill();
      reveal?.kill();
      reveal = null;
      reset();
    };
  }, []);

  return null;
}
