"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const signatureMomentEase = CustomEase.create(
  "signature-moment-ease",
  "0.16,1,0.3,1",
);

export function SignatureMomentMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-signature-moment]",
    );
    if (!section) {
      return;
    }

    const mask = section.querySelector<HTMLElement>(
      "[data-signature-moment-mask]",
    );
    const text = section.querySelector<HTMLElement>(
      "[data-signature-moment-text]",
    );
    const atmosphere = section.querySelector<HTMLElement>(
      "[data-signature-moment-atmosphere]",
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mask || !text || !atmosphere || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set(mask, {
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.set(text, {
        y: 28,
        opacity: 0,
      });
      gsap.set(atmosphere, {
        y: 0,
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
          ease: signatureMomentEase,
        },
      });

      reveal.to(
        text,
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
        },
        0,
      );

      reveal.to(
        mask,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
        },
        0,
      );

      reveal.set(
        mask,
        {
          clearProps: "clipPath",
        },
        1.18,
      );

      reveal.set(
        text,
        {
          clearProps: "transform,opacity",
        },
        1.18,
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 40%",
      invalidateOnRefresh: true,
      onEnter: play,
    });

    const parallax = gsap.to(atmosphere, {
      y: 120,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      trigger.kill();
      reveal?.kill();
      reveal = null;
      parallax.kill();
      reset();
    };
  }, []);

  return null;
}
