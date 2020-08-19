export const slideDown = (target) => {
    target.classList.add(`active`);
    target.style.height = `auto`;

    const height = target.clientHeight + `px`;

    target.style.height = `0px`;

    setTimeout(() => {
      target.style.height = height;
    }, 0);
}


export const slideUp = (target) => {
  target.style.height = `0px`;
  target.style.paddingTop = `0px`;
  target.style.paddingBottom = `0px`;

  target.addEventListener(`transitionend`, () => {
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.classList.remove(`active`);
  }, {
    once: true
  });
}
