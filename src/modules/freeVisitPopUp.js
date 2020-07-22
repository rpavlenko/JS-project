import changeOpacity from './changeOpacity';

const freeVisitPopUp = () => {
  const freeVisitPopUp = document.getElementById('free_visit_form'),
    right = document.querySelector('.right'),
    opacity = 0;

  right.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.open-popup')) {
      changeOpacity(freeVisitPopUp, opacity);
      freeVisitPopUp.style.display = 'block';
    }
  });

  freeVisitPopUp.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('close_icon')) {
      freeVisitPopUp.style.display = 'none';
    } else {
      target = target.closest('.form-content');
      if (!target) {
        freeVisitPopUp.style.display = '';
      }
    }
  });

};

export default freeVisitPopUp;
