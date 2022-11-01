const chkSoldout = () => {
  const soldoutIcons = document.querySelectorAll('.soldout-icon .icon_img');
  if (soldoutIcons) {
    Array.from(soldoutIcons).forEach((el) => {
      const t = $(el).closest('.xans-record-');
      t[0].classList.add('is-soldout');
      t[0].querySelector('.spec .xans-record- > span').innerHTML = 'SOLD OUT';
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  chkSoldout();
});
