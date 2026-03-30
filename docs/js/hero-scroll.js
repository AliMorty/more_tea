(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var dismissed = false;
  var animating = false;

  function dismissHero() {
    if (dismissed || animating) return;
    animating = true;
    hero.classList.add('hero-exit');

    hero.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'margin-top') return;
      hero.removeEventListener('transitionend', onEnd);
      dismissed = true;
      animating = false;
      window.scrollTo(0, 0);
    });
  }

  function restoreHero() {
    if (!dismissed || animating) return;
    animating = true;
    window.scrollTo(0, 0);
    hero.classList.remove('hero-exit');

    hero.addEventListener('transitionend', function onEnd(e) {
      if (e.propertyName !== 'margin-top') return;
      hero.removeEventListener('transitionend', onEnd);
      dismissed = false;
      animating = false;
    });
  }

  // Scroll down = dismiss, scroll up at top = restore
  window.addEventListener('wheel', function (e) {
    if (animating) { e.preventDefault(); return; }

    if (!dismissed && e.deltaY > 0) {
      e.preventDefault();
      dismissHero();
    } else if (dismissed && e.deltaY < 0 && window.scrollY === 0) {
      e.preventDefault();
      restoreHero();
    }
  }, { passive: false });

  // Touch support — block ALL scrolling while hero is visible
  var touchStartY = 0;
  window.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', function (e) {
    // Always block scrolling during animation
    if (animating) { e.preventDefault(); return; }

    // While hero is showing, block all native scrolling
    if (!dismissed) {
      e.preventDefault();
      var deltaY = touchStartY - e.touches[0].clientY;
      if (deltaY > 30) {
        dismissHero();
      }
      return;
    }

    // After hero is gone, only intercept scroll-up at top to restore
    if (window.scrollY === 0) {
      var deltaY = touchStartY - e.touches[0].clientY;
      if (deltaY < -30) {
        e.preventDefault();
        restoreHero();
      }
    }
  }, { passive: false });
})();
