export default () => {
  function accordeon(accordeonItems, toggleElement, toggleButton) {
    const items = document.querySelectorAll(accordeonItems);

    if (items) {
      items.forEach((item) => {
        const toggler = toggleButton ? item.querySelector(toggleButton) : item;
        const element = item.querySelector(toggleElement);
        const className = item.className.split(` `)[0];
        const scrollHeight = element.scrollHeight;

        element.style.maxHeight = new RegExp(`${className}--opened`).test(item.classList) ? `${scrollHeight}px` : null;

        toggler.addEventListener(`click`, (e) => {
          e.preventDefault();
          item.classList.toggle(`${className}--opened`);
          element.style.maxHeight = new RegExp(`${className}--opened`).test(item.classList) ? `${scrollHeight}px` : null;
        });
      });
    }
  }

  accordeon(`.filter__block`, `.filter__hidden-part`, `.filter__toggler`);

  if (window.innerWidth < 1025) {
    accordeon(`.filter`, `.filter__content`, `.filter__toggler--collapsed`);
  }
};