const selectClub = () => {
  const club = document.querySelector('.club-list');

  document.addEventListener('click', event => {
    let target = event.target;
    club.style.opacity = '-0.1';
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

    if (target.closest('.clubs-list')) {
      club.style.display = 'block';
      changeOpacity(club);
    } else {
      target = target.closest('.clubs-list');
      if (!target) {
        club.style.display = 'none';
        club.style.transition = 'opacity 0.1s';
      }
    }
  });
};

export default selectClub;
