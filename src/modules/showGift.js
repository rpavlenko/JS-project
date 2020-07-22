import changeOpacity from './changeOpacity';

const showGift = () => {
  const gift = document.getElementById('gift'),
    giftImage = document.querySelector('.fixed-gift'),
    opacity = 0;

  if (giftImage) {
    document.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('.fixed-gift')) {
        changeOpacity(gift, opacity);
        gift.style.display = 'flex';
        giftImage.remove();
      }
    });

    gift.addEventListener('click', event => {
      let target = event.target;
      if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
        gift.style.display = 'none';
        gift.style.opacity = '';
      } else {
        target = target.closest('.form-content');
        if (!target) {
          gift.style.display = '';
          gift.style.opacity = '';
        }
      }
    });
  }

};

export default showGift;
