import changeOpacity from './changeOpacity';

const selectClub = () => {
  const club = document.querySelector('.club-list'),
    opacity = 0;

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.closest('.clubs-list')) {
      club.style.display = 'block';
      changeOpacity(club, opacity);
    } else {
      target = target.closest('.clubs-list');
      if (!target) {
        club.style.display = 'none';
      }
    }
  });
};

export default selectClub;
