window.addEventListener('load', function () {
  moveSpaceman();
});

const moveSpaceman = () => {
  const spaceman = document.querySelector('#spaceman');
  const screenWH = { w: window.innerWidth, h: window.innerHeight };
  spaceman.addEventListener('mouseenter', () => {
    num = makeRandom();
    gsap.to(spaceman, {
      duration: 1.5,
      top: num.x + '%',
      left: num.y + '%',
      rotate: 'random(-150, 50)',
      ease: 'power4.out',
    });
  });
  spaceman.addEventListener('click', () => {
    num = makeRandom();
    gsap.to(spaceman, {
      duration: 1.5,
      top: num.x + '%',
      left: num.y + '%',
      rotate: 'random(-150, 50)',
      ease: 'power4.out',
    });
  });
};

const makeRandom = () => {
  const num = { x: 0, y: 0 };
  num.x = Math.floor(Math.random() * 100);
  num.y = Math.floor(Math.random() * 100);
  if (num.x >= 90) num.x = 90;
  if (num.y >= 90) num.y = 90;
  if (num.x <= 5) num.x = 10;
  return num;
};
