const showOnScroll = () => {
  const headHeight = document.querySelector('.head').clientHeight,
    topMenu = document.querySelector('.top-menu'),
    topMenuHeight = document.querySelector('.top-menu').clientHeight,
    mainSliderHeight = document.querySelector('.main-slider').clientHeight,
    toTopArrow = document.getElementById('totop');

  const headerElementsHeight = headHeight + topMenuHeight + mainSliderHeight;
  toTopArrow.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.scrollY > headerElementsHeight) {
      toTopArrow.style.display = 'block';
    } else {
      toTopArrow.style.display = 'none';
    }

    if (window.scrollY > headHeight + topMenuHeight) {
      topMenu.style.position = 'fixed';
    } else {
      topMenu.style.position = '';
    }
  });

  // smooth scroll
  toTopArrow.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

};

export default showOnScroll;
