import changeOpacity from './changeOpacity';

const callbackForm = () => {
  const right = document.querySelector('.right'),
    callbackForm = document.getElementById('callback_form'),
    opacity = 0;

  right.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.callback-btn')) {
      changeOpacity(callbackForm, opacity);
      callbackForm.style.display = 'block';
    }
  });

  callbackForm.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('close_icon')) {
      callbackForm.style.display = 'none';
    } else {
      target = target.closest('.form-content');
      if (!target) {
        callbackForm.style.display = '';
      }
    }
  });
};

export default callbackForm;
