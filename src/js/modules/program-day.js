import {slideDown, slideUp} from '../utils/slide';


// const sliderParams = {
//   loop: true,
//   pagination: {
//     el: elem.querySelector(`.swiper-pagination`),
//     type: 'fraction',
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//       navigation: {
//         nextEl: elem.querySelector(`.swiper-button-next`),
//         prevEl: elem.querySelector(`.swiper-button-prev`),
//       },
//     }
//   }
// };


export const programDay = () => {
  const programDayElems = document.querySelectorAll(`.js-program-day`);


    programDayElems.forEach((elem) => {
      const toggleElem = elem.querySelector(`.js-program-day-toggle`);
      const contentElem = elem.querySelector(`.js-program-day-content`);
      const sliderElems = elem.querySelectorAll(`.js-program-day-event-slider`);

      let sliderList = new Set();
      let isOpen = contentElem.classList.contains(`active`);

      const destroyAllSliders = () => {
        for (let slider of sliderList) {
          slider.destroy()
        };

        sliderList = new Set();
      }

      if (window.innerWidth >= 768) {
        sliderElems.forEach((elem) => {
          const slider = new Swiper(elem, {
            loop: true,
            pagination: {
              el: elem.querySelector(`.swiper-pagination`),
              type: 'fraction',
            },
            breakpoints: {
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                  nextEl: elem.querySelector(`.swiper-button-next`),
                  prevEl: elem.querySelector(`.swiper-button-prev`),
                },
              },
              1360: {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                  nextEl: elem.querySelector(`.swiper-button-next`),
                  prevEl: elem.querySelector(`.swiper-button-prev`),
                },
              }
            }
          });
          sliderList.add(slider);
        });
      }

      toggleElem.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          isOpen = contentElem.classList.contains(`active`);

          if (!isOpen) {
            if (sliderList.size > 0) {
              destroyAllSliders();
            }

            slideDown(contentElem);
            sliderElems.forEach((elem) => {
              const slider = new Swiper(elem, {
                loop: true,
                pagination: {
                  el: elem.querySelector(`.swiper-pagination`),
                  type: 'fraction',
                },
                breakpoints: {
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    navigation: {
                      nextEl: elem.querySelector(`.swiper-button-next`),
                      prevEl: elem.querySelector(`.swiper-button-prev`),
                    },
                  },
                  1360: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    navigation: {
                      nextEl: elem.querySelector(`.swiper-button-next`),
                      prevEl: elem.querySelector(`.swiper-button-prev`),
                    },
                  }
                }
              });
              sliderList.add(slider);
            });
          } else {
            slideUp(contentElem);
            destroyAllSliders();
          }
        }
      });
    });
}
