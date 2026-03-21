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

    if (!section || !card || !image || !meta) {
      return;
    }

    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        if (context.conditions?.reduceMotion) {
          gsap.set([card, meta, image], {
            clearProps: "all",
          });
          return;
        }

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

        const reveal = gsap.timeline({
          defaults: {
            ease: featuredProjectEase,
          },
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse",
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

        return () => {
          reveal.kill();
          gsap.set([card, meta, image], {
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
