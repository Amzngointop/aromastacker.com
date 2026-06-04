"use client";

import { useEffect, useRef } from "react";

/**
 * Progressive enhancement: finds `.reveal` children in the ref container and
 * adds the `.visible` class when they enter the viewport. Content is always
 * visible by default (CSS has no opacity:0 on .reveal). This hook only adds
 * a subtle entrance animation as a visual enhancement.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const els: Element[] = Array.from(container.querySelectorAll(".reveal"));
    if (container.classList.contains("reveal")) els.push(container);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already in viewport on load — mark visible immediately, no observer needed
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
