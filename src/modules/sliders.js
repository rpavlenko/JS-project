const sliders = () => {
  const slide = document.querySelectorAll('.main-slider .slide'),
    slideGallery = document.querySelectorAll('.gallery-slider .slide'),
    dotsList = document.querySelector('.gallery-slider .slider-dots'),
    gallerySlider = document.querySelector('.gallery-slider');

  let currentSlide = 0,
    interval;

  slideGallery.forEach((slide, index) => {
    if (index > 0) {
      slide.style.display = 'none';
    }
  });

  if (dotsList) {
    const addDots = () => {
      slideGallery.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('dot');
        if (index === 0) {
          li.classList.add('dot-active');
        }
        dotsList.append(li);
      });
    };

    addDots();
  }

  const dot = document.querySelectorAll('.dot');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(slideGallery, currentSlide, 'slide-active');

    if (dot.length > 0) {
      prevSlide(dot, currentSlide, 'dot-active');
    }

    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(slideGallery, currentSlide, 'slide-active');

    if (dot.length > 0) {
      nextSlide(dot, currentSlide, 'dot-active');
    }
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  gallerySlider.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    if (!target.closest('.slider-arrow, .dot')) {
      return;
    }

    prevSlide(slideGallery, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');
    if (target.closest('.slider-arrow.next')) {
      currentSlide++;
    } else if (target.closest('.slider-arrow.prev')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slideGallery, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  gallerySlider.addEventListener('mouseover', event => {
    if (event.target.closest('.slider-arrow') ||
      event.target.matches('.dot')) {
      stopSlide();
    }
  });
  gallerySlider.addEventListener('mouseout', event => {
    if (event.target.closest('.slider-arrow') ||
      event.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide();
};

export default sliders;
