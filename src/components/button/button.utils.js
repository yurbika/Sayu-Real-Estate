//Funktonalitäten verschiedenere button

export const toSection = refTo => {
  let getId = document.getElementById(refTo);
  //Die minus 75 ist der Stylingabstand
  window.scrollTo(0, getId.offsetTop - 75);
};

export const lo = 0;
