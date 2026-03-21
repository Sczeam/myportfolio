"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const processLensEasePrimary = CustomEase.create(
  "process-lens-ease-primary",
  "0.22,1,0.36,1",
);

export function ProcessLensMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-process-lens]");
    const kicker = document.querySelector<HTMLElement>("[data-process-lens-kicker]");
    const title = document.querySelector<HTMLElement>("[data-process-lens-title]");
    const rule = document.querySelector<HTMLElement>("[data-process-lens-rule]");
    const items = gsap.utils.toArray<HTMLElement>("[data-process-lens-item]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      !section ||
      !kicker ||
      !title ||
      !rule ||
      items.length === 0 ||
      reduceMotion.matches
    ) {
      return;
    }

    const reset = () => {
      gsap.set(kicker, {
        opacity: 0,
        y: 24,
      });
      gsap.set(title, {
        opacity: 0,
        y: 24,
      });
      gsap.set(rule, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(items, {
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

      const reveal = gsap.timeline({
        defaults: {
          ease: processLensEasePrimary,
        },
      });

      reveal.to(
        kicker,
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
        },
        0,
      );

      reveal.to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
        },
        0.15,
      );

      reveal.to(
        rule,
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.56,
        },
        0.18,
      );

      reveal.to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
          stagger: 0.15,
        },
        0.22,
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 78%",
      invalidateOnRefresh: true,
      onEnter: play,
    });

    return () => {
      trigger.kill();
      reset();
    };
  }, []);

  return null;
}
