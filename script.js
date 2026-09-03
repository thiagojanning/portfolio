document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.fade-img');

  if (!('IntersectionObserver' in window)) {
    images.forEach((img) => img.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  images.forEach((img) => {
    if (img.complete) {
      observer.observe(img);
    } else {
      img.addEventListener('load', () => observer.observe(img), { once: true });
    }
  });
});
