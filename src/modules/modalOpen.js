import changeOpacity from './changeOpacity';

const modalOpen = (form, button) => {
  const opacity = 0;

  button.addEventListener('click', event => {
    changeOpacity(form, opacity);
    form.style.display = 'block';
  });

  form.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('close_icon')) {
      form.style.display = 'none';
      form.style.opacity = '';
    } else {
      target = target.closest('.form-content');
      if (!target) {
        form.style.display = '';
        form.style.opacity = '';
      }
    }

  });

};

export default modalOpen;
