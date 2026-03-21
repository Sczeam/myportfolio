"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const featuredProjectEase = CustomEase.create(
  "featured-project-ease",
  "0.16,1,0.3,1",
);

export function FeaturedProjectMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-featured-project]");
    const card = document.querySelector<HTMLElement>("[data-featured-project-card]");
    const image = document.querySelector<HTMLElement>("[data-featured-project-image]");
    const meta = document.querySelector<HTMLElement>("[data-featured-project-meta]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section || !card || !image || !meta || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set(card, {
        opacity: 0,
        y: 24,
      });
      gsap.set(meta, {
        opacity: 0,
        y: 24,
      });
      gsap.set(image, {
        clipPath: "inset(50% 50% 50% 50%)",
        scale: 1.015,
        transformOrigin: "center center",
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
          ease: featuredProjectEase,
        },
      });

      reveal.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.78,
        },
        0,
      );

      reveal.to(
        image,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 0.78,
        },
        0,
      );

      reveal.to(
        meta,
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
