/*
cate_no =
sort_method =
0: 기본     : NEW
1: 상품명   : NAME
2: 제조사   : BRAND
3: 낮은가격 : LOWEST PRICE
4: 높은가격 : HIGHEST PRICE
5: 신상품   : NEW
6: 인기상품 : BEST
7: 사용후기 : REVIEW
8: 조회수   : VIEW
9: 좋아요   : LIKE
*/
const cateString = Array(
  'NEW',
  'NAME',
  'BRAND',
  'LOWEST PRICE',
  'HIGHEST PRICE',
  'NEW',
  'BEST',
  'REVIEW',
  'VIEW',
  'LIKE'
);
window.addEventListener('load', function () {
  makeSort();
});

const makeSort = () => {
  const orgOrderOptions = document.querySelectorAll('.xans-product-orderby option');
  if (orgOrderOptions) {
    const zMetaWrap = document.querySelector('.zMetaWrap');
    const divWrap = document.createElement('div');
    divWrap.setAttribute('id', 'zSelect');
    divWrap.setAttribute('class', 'zSelect');
    zMetaWrap.appendChild(divWrap);
    let rTag = '<ul>';
    const urlSortMethod = window.zQuery.sort_method;
    let ctMethod = 0;
    if (urlSortMethod === 'undefined' || !urlSortMethod) {
      ctMethod = 5;
    } else {
      ctMethod = Number(urlSortMethod);
    }
    rTag += '<li class="selected">' + cateString[ctMethod] + '</li>';
    Array.from(orgOrderOptions).forEach((el) => {
      const rValue = el.value.split('#');
      const url = new URL('https://zeein.co.kr' + rValue[0]);
      const urlParams = url.searchParams;
      const currentSort = Number(urlParams.get('sort_method'));
      if (currentSort !== ctMethod) {
        rTag +=
          '<li class="item" data-url="' + rValue[0] + '">' + cateString[currentSort] + '</li>';
      }
    });
    rTag += '</ul>';
    divWrap.innerHTML = rTag;

    const quikSort = document.querySelectorAll('.zSelect .item');
    Array.from(quikSort).forEach((el) => {
      el.addEventListener('click', (e) => {
        const goUrl = e.currentTarget.dataset.url;
        window.location.replace(goUrl);
      });
    });
    const listSelected = document.querySelector('.zSelect .selected');
    const zSelect = document.querySelector('#zSelect');
    listSelected.addEventListener('click', (e) => {
      zSelect.classList.toggle('open');
    });
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('selected')) return;
      zSelect.classList.remove('open');
    });
  }
};
