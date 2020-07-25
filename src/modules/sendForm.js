const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    statusMessage = document.createElement('div'),
    successPopUp = document.getElementById('thanks'),
    successPopUpContent = document.querySelector('.form-thanks-message'),
    thanksMessageTitle = document.querySelector('.thanks-message-title'),
    elementsForm = [];

  statusMessage.style.cssText = 'font-size: 1rem; color: #ffd11a;';
  const loadMessage = `<section class="sk-chasing-dots">
    <div class= "sk-child sk-dot-1"> </div>
    <div class= "sk-child sk-dot-2"> </div>
    </section>`;

  const valid = () => {
    elementsForm.forEach(elem => {
      const pattern = /[А-Яа-яЁе ]/;

      elem.value = elem.value.replace(/[^А-Яа-яЁе ]/, '');
      if (!pattern.test(elem.value)) {
        elem.value = '';
        elem.style.border = '2px solid tomato';
      } else {
        elem.style.border = '';
      }
    });
  };

  document.addEventListener('input', event => {
    const target = event.target;
    if (target.matches('input') && target.closest('form') && !target.matches('.promo')) {
      if (target.tagName !== 'button' && target.type !== 'button' && target.type === 'text') {
        elementsForm.push(target);
        valid();
      }
    }
  });

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  document.addEventListener('submit', event => {
    let target = event.target;
    const checkbox = target.querySelector('input[type="checkbox"]'),
      personalData = target.querySelector('.personal-data'),
      clubCheckboxMozaika = document.getElementById('footer_leto_mozaika'),
      clubCheckboxSchelkovo = document.getElementById('footer_leto_schelkovo'),
      chooseClub = target.querySelector('.choose-club');

    event.preventDefault();

    if (checkbox) {
      if (!checkbox.checked) {
        personalData.appendChild(statusMessage);
        statusMessage.textContent = 'Необходимо подтвердить согласие!';
        statusMessage.style.padding = "2px 0";
        return;
      }
    }

    if (target.id === 'footer_form') {
      if (!clubCheckboxMozaika.checked && !clubCheckboxSchelkovo.checked) {
        statusMessage.textContent = 'Необходимо выбрать клуб!';
        statusMessage.style.padding = "2px 0";
        chooseClub.appendChild(statusMessage);
        return;
      }
    }

    target.appendChild(statusMessage);
    statusMessage.innerHTML = loadMessage;

    const formData = new FormData(target);
    const body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    const checkIfPopUpExists = () => {
      if (target.closest('.popup')) {
        target = target.closest('.popup');
        target.style.display = 'none';
      }
    };

    postData(body)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('status not 200');
        }
        checkIfPopUpExists();
        successPopUp.style.display = 'block';
        statusMessage.textContent = '';
      })
      .catch(error => {
        checkIfPopUpExists();
        successPopUp.style.display = 'block';
        successPopUpContent.textContent = '';
        thanksMessageTitle.textContent = 'Ой!';
        successPopUpContent.appendChild(statusMessage);
        statusMessage.textContent = errorMessage;
        console.error(error);
      });

    successPopUp.addEventListener('click', event => {
      let target = event.target;
      if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
        successPopUp.style.display = 'none';
        successPopUp.style.opacity = '';
      } else {
        target = target.closest('.form-content');
        if (!target) {
          successPopUp.style.display = '';
          successPopUp.style.opacity = '';
        }
      }
    });

    target.reset();
  });
};

export default sendForm;
