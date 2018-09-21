var logoEl = document.querySelector('.logo-animation');
var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
var innerWidth = window.innerWidth;
var maxWidth = 740;
var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
var logoTimeline = anime.timeline({ loop: true });

logoEl.style.transform = 'translateY(80px) scale(' + logoScale + ')';

for (var i = 0; i < pathEls.length; i++) {
  var el = pathEls[i];
  el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
}

anime.easings['myCustomEasingName'] = function (t) {
  return Math.pow(Math.sin(t * 3), 3);
}

logoTimeline
  .add({
    targets: '.fill.in',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 1200,
      // delay: function (el, i, t) { return 700 + (i * 100); },
      delay: function (el, i, t) { return 0 + (i * 200); },
      easing: 'easeOutQuart'
      // easing: 'linear'
    },
    stroke: {
      value: ['#e9446d', function (el) { return anime.getValue(el.parentNode, 'stroke') }],
      duration: 1500,
      delay: function (el, i, t) { return 0 + (i * 200); },
      // easing: 'easeInQuad'
      easing: 'easeInQuad'
      // easing: 'linear'
    },
    opacity: {
      value: 0,
      duration: 1,
      delay: function (el, i, t) { return 2900 + (i * 200); },
    },
    offset: 0
  })
  .add({
    targets: '.fill.out',
    strokeDashoffset: [
      {
        value: [anime.setDashoffset,
        anime.setDashoffset],
        duration: 2890,
        delay: function (el, i) { return 10 + (i * 200); },
      },
      {
        value: [0, anime.setDashoffset],
        duration: 1200,
        delay: function (el, i) { return (i * 200); },
        easing: 'easeOutQuad'
        // easing: 'linear'
      }
    ],
    offset: 0
  })
  .add({
    targets: '.line.out',
    strokeDashoffset: {
      value: [0, anime.setDashoffset],
      duration: 2000,
      delay: function (el, i, t) { return 4500 + (i * 300); },
      // easing: 'easeInQuart'
      easing: 'easeOutQuad'
      // easing: 'easeInQuad'
      // easing: 'linear'
    },
    strokeWidth: {
      value: [0, .4],
      delay: function (el, i, t) { return 2900 + (i * 200); },
      duration: 200,
      easing: 'linear'
    },
    stroke: {
      value: [
        function (el) { return anime.getValue(el.parentNode, 'stroke') },
        '#e9446d',
      ],
      duration: 1000,
      delay: function (el, i, t) { return 4000 + (i * 300); },
      easing: 'linear'
    },
    offset: 0
  })
  .add({
    targets: '.letter',
    translateY: [
      { value: 40, duration: 1520, delay: function (el, i, t) { return 1000 + (i * 200); }, easing: 'myCustomEasingName' },
    ],
    offset: 0
  });
