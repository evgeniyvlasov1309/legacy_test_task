import {
  sendRequest
} from './ajax';
import {
  openBasketModal
} from './modal';

export default () => {
  const requestURL = 'http://localhost:3000/basket'
  const productCards = document.querySelectorAll('.card');

  productCards.forEach(card => {
    const basketBtn = card.querySelector('.card__basket-btn');
    const productName = card.querySelector('.card__title');
    const productAmount = card.querySelector('input[name=\"количество\"]');


    basketBtn.addEventListener('click', addToBasket.bind({}, productName, productAmount));
  });

  function addToBasket(productName, productAmount) {
    const order = {
      name: productName.textContent,
      amount: productAmount.value
    }

    sendRequest('POST', requestURL, order)
      .then(data => openBasketModal(data))
      .catch(err => openBasketModal('Не удалось добавить товар в корзину'));
  }
};