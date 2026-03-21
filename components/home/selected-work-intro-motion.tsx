"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const selectedWorkEasePrimary = CustomEase.create(
  "selected-work-ease-primary",
  "0.22,1,0.36,1",
);

export function SelectedWorkIntroMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-selected-work-intro]",
    );
    const index = document.querySelector<HTMLElement>("[data-selected-work-index]");
    const title = document.querySelector<HTMLElement>("[data-selected-work-title]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || !index || !title || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set(index, {
        opacity: 0,
        y: 24,
      });
      gsap.set(title, {
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

      const introReveal = gsap.timeline({
        defaults: {
          ease: selectedWorkEasePrimary,
        },
      });

      introReveal.to(
        index,
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
        },
        0,
      );

      introReveal.to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.56,
        },
        0.15,
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 78%",
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
