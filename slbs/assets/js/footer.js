(function () {
  const ulNavBottomSpans = document.querySelectorAll('.ul-nav-bottom .span');
  Array.from(ulNavBottomSpans).forEach((span) => {
    span.addEventListener('click', function (el) {
      const p = span.parentElement;
      const h = span.parentElement.querySelector('.sub-menu').offsetHeight;
      p.classList.toggle('is-open');
      p.style.setProperty('--h', h + 'px');
    });
  });
})();
