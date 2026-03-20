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
    const title = document.querySelector<HTMLElement>("[data-selected-work-title]");
    const note = document.querySelector<HTMLElement>("[data-selected-work-note]");

    if (!section || !title || !note) {
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
          gsap.set([title, note], {
            clearProps: "all",
          });
          return;
        }

        gsap.set(title, {
          opacity: 0,
          y: context.conditions?.mobile ? 14 : 18,
        });
        gsap.set(note, {
          opacity: 0,
          y: context.conditions?.mobile ? 10 : 12,
        });

        const introReveal = gsap.timeline({
          defaults: {
            ease: selectedWorkEasePrimary,
          },
          scrollTrigger: {
            trigger: section,
            start: context.conditions?.mobile ? "top 92%" : "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        introReveal.to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.56,
          },
          0,
        );

        introReveal.to(
          note,
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
          },
          0.1,
        );

        return () => {
          introReveal.kill();
          gsap.set([title, note], {
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
