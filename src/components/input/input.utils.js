//funktion entscheidet ob es eine zahl ist oder nicht

export const onlyNumberkey = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  //prüfen ob die erste zahl eine null ist
  if (e.target.value.length === 0 && ASCIICode === 48)
    return e.preventDefault();
  //pruefen ob es eine zahl ist
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
  return true;
};

export const removeDots = numberWithDots => {
  var temp = numberWithDots;
  temp = temp.replace(/[^0-9]/g, "");
  return temp;
};

//tausender punkte format
export const numberWithDots = x => {
  var number = removeDots(x);
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return number.toString();
};
