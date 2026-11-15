// Fades the home page photo in when it scrolls into view.
(function () {
  var hero = document.querySelector('.hero');
  if (!hero || !('IntersectionObserver' in window)) return;

  hero.classList.add('hero-hidden');

  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      hero.classList.remove('hero-hidden');
      observer.disconnect();
    }
  }, { threshold: 0.2 });

  observer.observe(hero);
})();
