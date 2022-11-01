(function () {
  const btnNavClose = document.querySelector('.btnNavClose');
  const btnClose = document.querySelector('#aside .btnClose');
  btnNavClose.addEventListener('click', function () {
    btnClose.click();
  });

  const targetLi = document.querySelectorAll('.navigation__category > ul > li.has-info');
  const siteInfo = document.querySelector('.navigation .site-info');
  if (targetLi) {
    Array.from(targetLi).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        siteInfo.classList.remove('invisible', 'opacity-0');
      });
      el.addEventListener('mouseleave', () => {
        siteInfo.classList.add('invisible', 'opacity-0');
      });
    });
  }
})();
