(function () {
  const href = window.location.href;
  const lastUrl = href.match(/([^\/]*)\/*$/)[1];
  let goIndex = 0;
  if (href.includes('order/list.html')) {
    goIndex = 1;
  }

  function navbar(el) {
    if (goIndex !== 0) {
      el.querySelector('.ul-nav-myshop .item:nth-child(' + Number(goIndex) + ')').classList.add(
        'is-active'
      );
    }
  }
  const components = document.querySelectorAll('[data-component="navbar"]');
  Array.from(components).forEach((el) => {
    new navbar(el);
  });
})();
