window.addEventListener('load', function () {
  handleNav();
});

function handleNav() {
  var btnNavs = document.querySelectorAll('.eNavFold');
  var btnClose = document.querySelector('#aside .btnClose');
  var searchField = document.querySelector('#aside .searchField');
  var dimmed = document.querySelector('#layoutDimmed');
  var elements = document.getElementsByClassName('test');
  btnNavs.forEach(function (btnNav) {
    btnNav.addEventListener('click', function () {
      document.body.classList.add('expand');
    });
  });
  btnClose.addEventListener('click', function () {
    document.body.classList.remove('expand');
    searchField.classList.remove('active');
  });
  handleDimmed(dimmed, document.body, 'expand');
  handleDimmed(dimmed, searchField, 'active');
}

function handleDimmed(target, element, className) {
  target.addEventListener('click', function () {
    element.classList.remove(className);
  });
}
