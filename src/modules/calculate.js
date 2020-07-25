const calculate = () => {
  const priceMessage = document.getElementById('price-total'),
    cardForm = document.getElementById('card-form'),
    cardMozaikaCheckbox = document.getElementById('card_leto_mozaika'),
    cardSchelkovoCheckbox = document.getElementById('card_leto_schelkovo'),
    promocode = document.querySelector('.promo'),
    time = document.querySelectorAll('.time input');

  const mozaikaClub = {
    1: 1999,
    6: 9900,
    9: 13900,
    12: 9900,
  };

  const schelkovoClub = {
    1: 2999,
    6: 14990,
    9: 21990,
    12: 14990,
  };

  priceMessage.textContent = 1999;
  const discount = 30;

  const addDiscount = (discountValue, promocodeInput) => {
    if (promocodeInput.value && promocodeInput.value === 'ТЕЛО2019') {
      priceMessage.textContent = Math.floor(priceMessage.textContent * (1 - (discountValue / 100)));
    }
  };

  cardForm.addEventListener('input', () => {
    let selectedPeriod;

    time.forEach(item => {
      if (item.checked && cardMozaikaCheckbox.checked) {
        selectedPeriod = item.value;
        priceMessage.textContent = mozaikaClub[selectedPeriod];
        addDiscount(discount, promocode);

      } else if (item.checked && cardSchelkovoCheckbox.checked) {
        selectedPeriod = item.value;
        priceMessage.textContent = schelkovoClub[selectedPeriod];
        addDiscount(discount, promocode);
      }
    });
  });

};

export default calculate;
