const changeOpacity = (elem, opacity) => {
  if (opacity < 1) {
    opacity += 0.1;
    setTimeout(() => {
      changeOpacity(elem, opacity);
    }, 10);
  }
  elem.style.opacity = opacity;
};

export default changeOpacity;
