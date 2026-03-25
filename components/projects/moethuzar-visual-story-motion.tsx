"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarVisualStoryEase = CustomEase.create(
  "moethuzar-visual-story-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarVisualStoryMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-moethuzar-visual-story]");

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      const phase1 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-visual-story-phase="phase1"]'),
      );
      const images = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-moethuzar-visual-story-image]"),
      );

      gsap.set(phase1, { y: 12, opacity: 0 });
      gsap.set(images, { y: 24, opacity: 0, scale: 1.015 });

      let headingReveal: gsap.core.Timeline | null = null;
      const imageTriggers: ScrollTrigger[] = [];
      const imageAnimations: gsap.core.Tween[] = [];
      let hasPlayed = false;

      const playHeading = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        headingReveal = gsap.timeline({
          defaults: { ease: moethuzarVisualStoryEase },
        });

        headingReveal.to(phase1, {
          y: 0,
          opacity: 1,
          duration: 0.56,
        });
      };

      const sectionTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        invalidateOnRefresh: true,
        onEnter: playHeading,
      });

      images.forEach((image) => {
        let played = false;

        const trigger = ScrollTrigger.create({
          trigger: image,
          start: "top 85%",
          invalidateOnRefresh: true,
          onEnter: () => {
            if (played) {
              return;
            }

            played = true;
            imageAnimations.push(
              gsap.to(image, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.78,
                ease: moethuzarVisualStoryEase,
              }),
            );
          },
        });

        imageTriggers.push(trigger);
      });

      return () => {
        sectionTrigger.kill();
        imageTriggers.forEach((trigger) => trigger.kill());
        imageAnimations.forEach((animation) => animation.kill());
        headingReveal?.kill();
      };
    });

    return () => scope.revert();
  }, []);

  return null;
}
