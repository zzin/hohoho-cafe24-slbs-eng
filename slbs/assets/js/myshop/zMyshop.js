(function () {
  function navbar(el) {
    const href = window.location.href;
    const lastUrl = href.match(/([^\/]*)\/*$/)[1];
    let goIndex = 0;

    if (href.includes('order/list.html')) {
      goIndex = 1;
    }
    if (href.includes('myshop/wish_list.html')) {
      goIndex = 2;
    }
    if (
      href.includes('/myshop/board_list.html') ||
      href.includes('write.html') ||
      href.includes('review')
    ) {
      goIndex = 3;
    }
    if (href.includes('coupon.html')) {
      goIndex = 4;
    }
    if (href.includes('historyList.html')) {
      goIndex = 5;
    }
    if (href.includes('modify.html')) {
      goIndex = 6;
    }
    // console.log(href, lastUrl, goIndex);
    if (goIndex !== 0) {
      el.querySelector('.ul-nav-myshop .item:nth-child(' + Number(goIndex) + ')').classList.add(
        'is-active'
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll('[data-component="navbar"]');
    Array.from(components).forEach((el) => {
      setTimeout(() => {
        new navbar(el);
      }, 50);
    });
  });
})();
