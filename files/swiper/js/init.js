const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

/* top-categories (front page) -> */
let topCategoriesSlider = document.getElementById('top-categories-slider');
new Swiper(topCategoriesSlider, {
   navigation: {
      prevEl: '#top-categories-slider-button-prev',
      nextEl: '#top-categories-slider-button-next',
   },
   slidesPerView: 3,
   slidesPerGroup: 1,
   autoHeight: false,
   watchOverflow: true,
   spaceBetween: 21,
   speed: 800,
   effect: 'slide',
   breakpoints: {
      0: {
         autoHeight: true,
         slidesPerView: 1,
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
      },
      576: {
         effect: 'slide',
         slidesPerView: 2,
         autoHeight: false,
      },
      992: {
         effect: 'slide',
         slidesPerView: 3,
      }
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrewNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
});
/* <- top-categories (front page) */

/* Partners (front page) -> */
let partnersSlider = document.getElementById('partners-slider');
new Swiper(partnersSlider, {
   navigation: {
      prevEl: '#partners-slider-button-prev',
      nextEl: '#partners-slider-button-next',
   },
   slidesPerView: 4,
   slidesPerGroup: 1,
   watchOverflow: true,
   spaceBetween: 20,
   speed: 800,
   effect: 'slide',
   breakpoints: {
      0: {
         slidesPerView: 2,
      },
      641: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 4,
      }
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrewNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
});
/* <- Partners (front page) */

/* Blog (front page) -> */
let postsSlider = document.getElementById('posts-slider');
new Swiper(postsSlider, {
   navigation: {
      prevEl: '#posts-slider-button-prev',
      nextEl: '#posts-slider-button-next',
   },
   slidesPerView: 3,
   slidesPerGroup: 1,
   autoHeight: false,
   watchOverflow: true,
   spaceBetween: 21,
   speed: 800,
   effect: 'slide',
   breakpoints: {
      0: {
         autoHeight: true,
         slidesPerView: 1,
         effect: 'fade',
         fadeEffect: {
            crossFade: true
         },
      },
      576: {
         slidesPerView: 2,
         autoHeight: false,
      },
      992: {
         slidesPerView: 3,
      }
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrewNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
});
/* <- Blog (front page) */

function initializeSliderTwoImage(sliderId, prevBtnId, nextBtnId) {
   const slider = document.getElementById(sliderId);
   if (slider) {
      new Swiper(slider, {
         navigation: {
            prevEl: `#${prevBtnId}`,
            nextEl: `#${nextBtnId}`,
         },
         watchOverflow: true,
         spaceBetween: 40,
         loop: true,
         speed: 800,
         effect: 'slide',
         slidesPerView: 2,
         preloadImages: true,
         lazy: {
            loadOnTransitionStart: true,
            loadPrewNext: true,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
         breakpoints: {
            0: {
               spaceBetween: 50,
               slidesPerView: 1,
            },
            576: {
               spaceBetween: 20,
               slidesPerView: 2,
            },
            768: {
               spaceBetween: 40,
               slidesPerView: 2,
            },
         }
      });
   }
}

function initializeSliderThreeImage(slider2Id, prevBtn2Id, nextBtn2Id) {
   const slider = document.getElementById(slider2Id);
   if (slider) {
      new Swiper(slider, {
         navigation: {
            prevEl: `#${prevBtn2Id}`,
            nextEl: `#${nextBtn2Id}`,
         },
         watchOverflow: true,
         spaceBetween: 28,
         loop: true,
         speed: 800,
         effect: 'slide',
         slidesPerView: 3,
         preloadImages: true,
         lazy: {
            loadOnTransitionStart: true,
            loadPrewNext: true,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
         breakpoints: {
            0: {
               spaceBetween: 50,
               slidesPerView: 1,
            },
            576: {
               spaceBetween: 18,
               slidesPerView: 2,
            },
            961: {
               spaceBetween: 28,
               slidesPerView: 3,
            },
         }
      });
   }
}