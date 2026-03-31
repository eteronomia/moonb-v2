/**
 * FAQ Accordion — smooth height animation like family.co
 * Uses CSS transition on height with the family.co easing curve.
 * Only one item open at a time (optional, matches family.co behavior).
 */

function initFaqAccordion() {
  const items = document.querySelectorAll('[data-faq-item]');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('[data-faq-trigger]');
    const answerWrap = item.querySelector('[data-faq-answer]');
    if (!trigger || !answerWrap) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other items first (family.co behavior)
      items.forEach((other) => {
        if (other !== item && other.classList.contains('is-open')) {
          closeItem(other);
        }
      });

      if (isOpen) {
        closeItem(item);
      } else {
        openItem(item);
      }
    });
  });
}

function openItem(item) {
  const answerWrap = item.querySelector('[data-faq-answer]');
  const trigger = item.querySelector('[data-faq-trigger]');

  item.classList.add('is-open');
  trigger?.setAttribute('aria-expanded', 'true');

  // Set height to scrollHeight for smooth animation
  answerWrap.style.height = answerWrap.scrollHeight + 'px';

  // After transition, set to auto so content can reflow if needed
  const onEnd = () => {
    answerWrap.style.height = 'auto';
    answerWrap.removeEventListener('transitionend', onEnd);
  };
  answerWrap.addEventListener('transitionend', onEnd);
}

function closeItem(item) {
  const answerWrap = item.querySelector('[data-faq-answer]');
  const trigger = item.querySelector('[data-faq-trigger]');

  // Set explicit height first so transition can work
  answerWrap.style.height = answerWrap.scrollHeight + 'px';

  // Force reflow
  answerWrap.offsetHeight;

  // Now animate to 0
  answerWrap.style.height = '0px';

  item.classList.remove('is-open');
  trigger?.setAttribute('aria-expanded', 'false');
}

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaqAccordion);
} else {
  initFaqAccordion();
}

document.addEventListener('astro:page-load', initFaqAccordion);
