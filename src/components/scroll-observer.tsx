'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: Stop observing once visible to avoid re-animating
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Select all elements with animation classes
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-right, .reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []); // Run once on mount

  return null;
}