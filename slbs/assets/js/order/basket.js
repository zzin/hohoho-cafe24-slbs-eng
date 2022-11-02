function deleteBasketAll() {
  const checkAllBtn = document.querySelector('.subHead .custom-checkbox input[type="checkbox"]');
  if (!checkAllBtn.checked) {
    checkAllBtn.click();
  }
  Basket.deleteBasket();
}
