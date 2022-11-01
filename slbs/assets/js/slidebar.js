(function () {
  const btnArrows = document.querySelectorAll('#aside .btn-arrow');
  Array.from(btnArrows).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const p = btn.parentElement;
      const h = p.querySelector('.sub-menu').offsetHeight;
      p.style.setProperty('--h', h + 'px');
      p.classList.toggle('is-open');
    });
  });
})();
