//funktion entscheidet ob es eine zahl ist oder nicht

export const onlyNumberkey = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
  return true;
};

const removeDots = numberWithDots => {
  var temp = numberWithDots;
  temp = temp.replace(/\./g, "");
  return temp;
};

//tausender punkte format
export const numberWithDots = x => {
  var number = removeDots(x);
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return number;
};
