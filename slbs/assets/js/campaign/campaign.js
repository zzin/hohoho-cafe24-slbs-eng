document.addEventListener('DOMContentLoaded', () => {
  initHover();
});
const initHover = () => {
  const items = document.querySelectorAll('.campaign--list > .item');
  Array.from(items).forEach((el) => {
    el.querySelector('.campaign--list-wrap').addEventListener('mouseenter', (e) => {
      const arrow = e.currentTarget.querySelector('.arrow');
      arrow.classList.remove('hidden');
    });
    el.querySelector('.campaign--list-wrap').addEventListener('mouseleave', (e) => {
      const arrow = e.currentTarget.querySelector('.arrow');
      arrow.classList.add('hidden');
    });
    el.querySelector('.campaign--list-wrap').addEventListener('click', (e) => {
      el.closest('.item').classList.toggle('active');
    });
  });
};
