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

    if (!section || !index || !title) {
      return;
    }

    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        if (context.conditions?.reduceMotion) {
          gsap.set([index, title], {
            clearProps: "all",
          });
          return;
        }

        gsap.set(index, {
          opacity: 0,
          y: 24,
        });
        gsap.set(title, {
          opacity: 0,
          y: 24,
        });

        const introReveal = gsap.timeline({
          defaults: {
            ease: selectedWorkEasePrimary,
          },
          scrollTrigger: {
            trigger: section,
            start: context.conditions?.mobile ? "top 85%" : "top 82%",
            toggleActions: "play none none reverse",
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

        return () => {
          introReveal.kill();
          gsap.set([index, title], {
            clearProps: "all",
          });
        };
      },
    );

    return () => {
      media.revert();
    };
  }, []);

  return null;
}
