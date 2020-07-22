const selectClub = () => {
  const club = document.querySelector('.club-list');

  let opacity = 0;
  const changeOpacity = elem => {
    if (opacity < 1) {
      opacity += 0.1;
      setTimeout(() => {
        changeOpacity(elem);
      }, 10);
    }
    elem.style.opacity = opacity;
  };

  document.addEventListener('click', event => {
    let target = event.target;

    if (target.closest('.clubs-list')) {
      club.style.display = 'block';
      changeOpacity(club);
    } else {
      target = target.closest('.clubs-list');
      if (!target) {
        club.style.display = 'none';
        opacity = 0;
      }
    }
  });
};

export default selectClub;
