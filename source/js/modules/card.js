export default () => {
  const controlInputs = document.querySelectorAll('.card__amount-input');

  controlInputs.forEach(input => {
    const inputField = input.querySelector('input');
    const decreaseButton = input.querySelector('.card__amount-btn--decrease');
    const increaseButton = input.querySelector('.card__amount-btn--increase');

    decreaseButton.addEventListener('click', function () {
      if (inputField.value !== '1') {
        inputField.value--;
      }
    });

    inputField.addEventListener('input', function () {
      let numberFilter = this.value.match(/[0-9]/g);
      if (numberFilter) {
        this.value = numberFilter.join('');
      } else {
        this.value = 1;
      }
    });

    increaseButton.addEventListener('click', function () {
      inputField.value++;
    });
  });
};