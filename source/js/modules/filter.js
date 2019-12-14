export default () => {
  const range = document.querySelector('.filter__range');
  const min = 0;
  const max = 10000;

  noUiSlider.create(range, {
    start: [0, 10000],
    connect: true,
    range: {
      'min': min,
      'max': max
    }
  });

  const checkboxes = document.querySelectorAll('.filter input[type=\"checkbox\"');
  const resetBtn = document.querySelector('.filter__reset-btn');
  const inputPriceFrom = document.querySelector('input[name=\"price_from\"]');
  const inputPriceTo = document.querySelector('input[name=\"price_to\"]');

  const filtered = {
    range: false,
    checkboxes: false
  };

  function showResetBtn(filtered) {
    resetBtn.style.display = null;
    for (let key in filtered) {
      if (filtered[key]) {
        resetBtn.style.display = 'block';
      }
    }
  }

  resetBtn.addEventListener('click', resetFilter);

  function updateFilter() {

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        filtered.checkboxes = true;
      }
    });

    showResetBtn(filtered);
  }

  function resetFilter() {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    range.noUiSlider.set([min, max]);

    filtered.range = false;
    filtered.checkboxes = false;

    showResetBtn(filtered);
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function (e) {
      filtered.checkboxes = false;

      updateFilter();
    });
  });

  range.noUiSlider.on('change', function (values) {
    if (Math.round(values[0]) !== min || Math.round(values[1]) !== max) {
      filtered.range = true;
    } else {
      filtered.range = false;
    }

    updateFilter();
  });

  inputPriceFrom.addEventListener('change', function (e) {
    range.noUiSlider.set([e.target.value, null]);
    resetBtn.style.display = 'block';
  });

  inputPriceTo.addEventListener('change', function (e) {
    range.noUiSlider.set([null, e.target.value]);
  });

  range.noUiSlider.on('update', function (values, handle) {
    inputPriceFrom.value = Math.round(values[0]);
    inputPriceTo.value = Math.round(values[1]);
  });
};