export const toSection = refTo => {
  let getId = document.getElementById(refTo);
  window.scrollTo({ left: 0, top: getId.offsetTop, behavior: "smooth" });
};
