const chkURL = () => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  window.zUrl = {
    href: window.location.href,
    cate: urlParams.get('cate_no'),
    sort: urlParams.get('sort_method'),
  };
};

const getQuery = () => {
  const url = document.location.href;
  const onlyParam = url.split('#');
  const qs = onlyParam[0].substring(onlyParam[0].indexOf('?') + 1).split('&');
  const result = {};
  for (let i = 0; i < qs.length; i++) {
    qs[i] = qs[i].split('=');
    result[qs[i][0]] = decodeURIComponent(qs[i][1]);
  }
  return result;
};
(function () {
  chkURL();
  window.zQuery = getQuery();
})();
