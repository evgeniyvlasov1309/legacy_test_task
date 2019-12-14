function closeModal() {
  const openModal = document.querySelector('.modal--open')
  openModal.classList.remove('modal--open');
}

function openBasketModal(data) {
  const modal = document.querySelector('.modal--basket');
  const modalText = modal.querySelector('.modal__text');
  const modalClose = modal.querySelector('.modal__close');

  if (typeof data === 'object') {
    modalText.textContent = `Товар ${data.name}, количество - ${data.amount}, добавлен в корзину`;
  } else {
    modalText.textContent = data;
  }

  modalClose.addEventListener('click', closeModal);
  modal.classList.add('modal--open');
}

export {
  openBasketModal
};
