// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Menu page: highlight active category pill while scrolling
  var pills = document.querySelectorAll('.menu-nav .pill');
  var sections = document.querySelectorAll('.menu-category');
  if (pills.length && sections.length && 'IntersectionObserver' in window) {
    var map = {};
    pills.forEach(function (p) { map[p.getAttribute('href').replace('#', '')] = p; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          pills.forEach(function (p) { p.classList.remove('is-active'); });
          var pill = map[entry.target.id];
          if (pill) pill.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }
});
