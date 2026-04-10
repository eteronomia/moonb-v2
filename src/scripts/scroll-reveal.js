/**
 * Scroll Reveal — Intersection Observer
 * Adds .revealed class to elements with [data-reveal] when they enter viewport.
 * Supports staggered delays via [data-reveal-delay].
 */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (!revealElements.length) return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '50px 0px -20px 0px',
    }
  );

  // Small delay to ensure layout is settled before observing
  requestAnimationFrame(() => {
    revealElements.forEach((el) => observer.observe(el));
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

// Re-run on Astro page transitions (View Transitions)
document.addEventListener('astro:page-load', initScrollReveal);
