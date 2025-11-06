import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Initialize IntersectionObserver to reveal elements on scroll
export function initScrollReveal({
  selector = '.reveal',
  root = null,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.15,
} = {}) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback: immediately show
    document.querySelectorAll(selector).forEach(el => el.classList.add('in-view'))
    return () => {}
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        observer.unobserve(entry.target)
      }
    })
  }, { root, rootMargin, threshold })

  document.querySelectorAll(selector).forEach((el) => observer.observe(el))

  // Return cleanup
  return () => observer.disconnect()
}
