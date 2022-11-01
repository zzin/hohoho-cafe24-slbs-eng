window.addEventListener('load', function () {
  initTopRoll();
});

function initTopRoll() {
  const topRoll = document.getElementById('topRoll');
  const topRollUl = topRoll.querySelector('ul');
  const topRollLi = topRollUl.querySelector('li');
  const liWidth = topRollLi.clientWidth;
  for (let i = 0; i < 10; i++) {
    var clone = topRollLi.cloneNode(true);
    topRollLi.after(clone);
  }
  topRollUl.classList.remove('opacity-0');
  const gs = gsap.to(topRollUl, {
    x: -1 * liWidth,
    duration: 10,
    ease: 'none',
    repeat: -1,
    onComplete: () => {
      gsap.set(topRollUl, { x: 0 });
    },
  });
  topRoll.addEventListener('mouseenter', () => {
    gs.pause();
  });
  topRoll.addEventListener('mouseleave', () => {
    gs.play();
  });
}
