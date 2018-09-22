var innerWidth = window.innerWidth;
var maxWidth = 740;
var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
var alisman = anime.timeline({ loop: true });

alisman
  .add({
    targets: '.internal .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 150,
    delay: function (el, i) { return i * 100 },
    offset: 0
  })
  .add({
    targets: '.internal .fills path',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [
      {
        value: 0,
        duration: 0,
      },
      {
        value: .3,
        duration: 2000,
        delay: function (el, i, t) { return 2000 + (i * 50); },
      },
    ],
    easing: 'easeInOutBack',
    duration: 150,
    offset: 0
  })
  .add({
    targets: '.alisman .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 150,
    delay: function (el, i) { return i * 100 },
    offset: 4500
  })
  .add({
    targets: '.alisman .fills path',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: [
      {
        value: 0,
        duration: 0,
      },
      {
        value: 1,
        duration: 1000,
        delay: function (el, i, t) { return 7500 + (i * 80); },
      },
    ],
    easing: 'easeInOutBack',
    duration: 150,
    delay: 0,
    offset: 0,
  })
  .add({
    targets: '#lineDrawing',
    translateX: [
      { value: 1500, duration: 1000, delay: function (el, i, t) { return 300 + (i * 200); }, easing: 'linear' },
    ],
    scale: [{
      value: 0.8,
      duration: 300,
      delay: function (el, i, t) { return 0 + (i * 200); },
      easing: 'easeOutQuad'
    },
    ],
    offset: 11000
  });
