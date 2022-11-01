const items = document.querySelectorAll('.about-detail .item');
gsap.set('#box', { xPercent: 10, yPercent: -110, x: 0, y: 0 });
const box = document.getElementById('box');
const boxInner = box.querySelectorAll('.box-inner');
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.1;
const xSet = gsap.quickSetter(box, 'x', 'px');
const ySet = gsap.quickSetter(box, 'y', 'px');

if (items) {
  Array.from(items).forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      makeView(e.target.dataset.uid);
      box.classList.remove('opacity-0');
    });
    el.addEventListener('mouseleave', (e) => {
      box.classList.add('opacity-0');
    });
  });

  function makeView(target) {
    Array.from(boxInner).forEach((el) => {
      el.classList.add('opacity-0');
    });
    document.querySelector('#box-' + target).classList.remove('opacity-0');
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  gsap.ticker.add(() => {
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
}
