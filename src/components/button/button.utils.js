//Funktonalitäten verschiedenere button

export const toSection = refTo => {
  let getId = document.getElementById(refTo);
  window.scrollTo(0, getId.offsetTop);
};
