const toggleBurgerMenu = () => {
  const menu = document.querySelector('.popup-menu');

  const handlerMenu = () => {
    menu.classList.toggle('popup-menu-active');
  };

  document.body.addEventListener('click', event => {
    let target = event.target;
    if (target.closest('.menu-button-image') || target.closest('.close-menu-btn')) {
      handlerMenu();
    } else if (!target.closest('.popup-menu') && menu.classList.contains('popup-menu-active')) {
      handlerMenu();
    } else if ((target.matches('ul>li>a') && menu.classList.contains('popup-menu-active'))) {
      handlerMenu();
    }

    if (target.matches('ul>li>a') && (target.closest('.top-menu') || target.closest('.popup-menu'))) {
      // smooth scroll
      target = target.closest('ul>li');
      const anchor = target.querySelector('a[href*="#"]');
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
};

export default toggleBurgerMenu;
