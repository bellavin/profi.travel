export const bookBtn = () => {
  const btnElems = document.querySelectorAll(`.js-book-btn`);

  if (btnElems.length > 0) {
    btnElems.forEach ((elem) => {

      elem.addEventListener(`click`, (evt) => {
        const target = evt.target;
        const txt = evt.target.textContent;

        target.classList.add(`book-btn--loading`);
        target.blur();

        setTimeout(() => {
          target.classList.remove(`book-btn--loading`);
          target.classList.add(`book-btn--success`);
          target.textContent = target.dataset.successTxt;

          setTimeout(() => {
            target.classList.remove(`book-btn--success`);
            target.textContent = txt;
          }, 2000);

        }, 2000);
      });
    });
  }
}
