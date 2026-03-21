"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const valueFrameEase = CustomEase.create(
  "value-frame-ease",
  "0.16,1,0.3,1",
);

export function ValueFrameMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-value-frame]");
    if (!section) {
      return;
    }

    const surface = section.querySelector<HTMLElement>("[data-value-frame-surface]");
    const copy = section.querySelector<HTMLElement>("[data-value-frame-copy]");
    const quote = section.querySelector<HTMLElement>("[data-value-frame-quote]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!surface || !copy || !quote || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set([surface, copy, quote], {
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
          ease: valueFrameEase,
          duration: 0.56,
        },
      });

      reveal.to(
        surface,
        {
          opacity: 1,
        },
        0,
      );

      reveal.to(
        [copy, quote],
        {
          opacity: 1,
          stagger: 0.12,
        },
        0.08,
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
