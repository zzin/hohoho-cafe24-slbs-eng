/**
 * 상품상세 사용후기
 */
const zReviewWrap = document.getElementById('zReviewWrap');
document.addEventListener('DOMContentLoaded', () => {
  if (zReviewWrap) {
    if (zReviewWrap.querySelectorAll('.xans-record-').length) {
      REVIEW.readPhoto();
    }
  }
});

const REVIEW = {
  getPhoto: function () {
    const metaDates = zReviewWrap.querySelectorAll('.metaWrap-date');
    if (metaDates.length) {
      Array.from(metaDates).forEach((ctDate) => {
        ctDate.innerText = ctDate.innerText.substr(0, 9);
      });
    }
    const Links = zReviewWrap.querySelectorAll('.link');
    if (Links.length) {
      Array.from(Links).forEach((item) => {
        const sUid = item.getAttribute('data-uid');
        const sHref = item.getAttribute('href');
        const sQuery = sHref.split('?');
        const pass_check = '&pass_check=F';
        $.ajax({
          url: '/exec/front/board/product/4?' + sQuery[1] + pass_check,
          dataType: 'json',
          success: function (data) {
            const sImg = data.read['content_image'];
            const rHtml = [];
            let dummy = document.createElement('div');
            if (sImg) {
              const sImgArray = sImg.split('<br>');
              rHtml.push(`<ul class="ulGallery">`);
              Array.from(sImgArray.slice(0, -1)).forEach((img) => {
                dummy.innerHTML = `${img}`;
                const imgUrl = dummy.getElementsByTagName('img');
                rHtml.push(`<li>
                   <figure>
                     <a href="${imgUrl[0].src}" class="zoomImg">${img}</a>
                   </figure>
                 </li>
                 `);
              });
              rHtml.push(`</ul>`);
              document.querySelector(`.photo-${sUid}`).innerHTML = rHtml.join('');
            }
          },
        });
      });
    }
    zReviewWrap.addEventListener('click', function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      var link = target.src ? target.parentNode : target;
      var options = { index: link, event: event };
      var links = this.querySelectorAll('.zoomImg');
      if (target.localName === 'img') {
        blueimp.Gallery(links, options);
      }
    });
  },
  readPhoto: function () {
    REVIEW.getPhoto();
  },
  END: function () {},
};
