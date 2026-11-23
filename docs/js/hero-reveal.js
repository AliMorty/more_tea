// Secret photo page at the bottom of the home page.
// Two states, like a second page:
//   - normal page: when you are at the very bottom and scroll down,
//     the photo slides up and fills the screen.
//   - photo page: scrolling is locked; scroll up to slide back to the page.
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var shown = false;
  var busy = false;          // true while sliding, plus a short pause after
  var ANIMATION_MS = 800;    // matches the CSS transition
  var PAUSE_MS = 300;        // swallow leftover trackpad momentum
  var touchStartY = 0;

  function atBottom() {
    var doc = document.documentElement;
    return window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
  }

  function lockFor(ms) {
    busy = true;
    setTimeout(function () { busy = false; }, ms);
  }

  function showPhoto() {
    if (shown || busy) return;
    shown = true;
    hero.classList.add('hero-shown');
    hero.removeAttribute('aria-hidden');
    lockFor(ANIMATION_MS + PAUSE_MS);
  }

  function hidePhoto() {
    if (!shown || busy) return;
    shown = false;
    hero.classList.remove('hero-shown');
    hero.setAttribute('aria-hidden', 'true');
    lockFor(ANIMATION_MS + PAUSE_MS);
  }

  // Mouse wheel / trackpad
  window.addEventListener('wheel', function (e) {
    if (busy && (shown || atBottom())) { e.preventDefault(); return; }

    if (shown) {
      e.preventDefault();                 // the photo page does not scroll
      if (e.deltaY < 0) hidePhoto();
    } else if (e.deltaY > 0 && atBottom()) {
      e.preventDefault();
      showPhoto();
    }
  }, { passive: false });

  // Touch: swipe up at the bottom to show, swipe down on the photo to go back
  window.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchmove', function (e) {
    var deltaY = touchStartY - e.touches[0].clientY;

    if (shown) {
      e.preventDefault();
      if (deltaY < -30) hidePhoto();
    } else if (deltaY > 30 && atBottom()) {
      e.preventDefault();
      showPhoto();
    }
  }, { passive: false });

  // Keyboard
  window.addEventListener('keydown', function (e) {
    var down = ['ArrowDown', 'PageDown', ' ', 'End'];
    var up = ['ArrowUp', 'PageUp', 'Home', 'Escape'];

    if (shown) {
      if (down.indexOf(e.key) !== -1) e.preventDefault();
      if (up.indexOf(e.key) !== -1) { e.preventDefault(); hidePhoto(); }
    } else if (down.indexOf(e.key) !== -1 && atBottom()) {
      e.preventDefault();
      showPhoto();
    }
  });
})();
