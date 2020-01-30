//prueft die eingabe auf eine zahl

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

//entfernt alles außer zahlen
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

//der String Preis ist der standartwert
export const checkInputValue = (minInput, maxInput) => {
  //Preis ist 0 und egal
  if (minInput === "" && maxInput === "Egal") return "Preis";
  //mininput ist groeßer als maxinput
  if (
    Number(removeDots(minInput)) > Number(removeDots(maxInput)) &&
    maxInput !== "" &&
    maxInput !== "Egal"
  ) {
    let temp = maxInput;
    maxInput = minInput;
    minInput = temp;
    return `${removeDots(minInput)}€ - ${removeDots(maxInput)}€`;
  }
  //maxinput ist leer
  if (minInput !== "" && (maxInput === "" || maxInput === "Egal"))
    return `ab ${removeDots(minInput)}€`;
  //mininput ist leer
  if (minInput === "" && maxInput !== "") return `bis ${removeDots(maxInput)}€`;
  if (minInput !== "" && maxInput !== "")
    return `${removeDots(minInput)}€ - ${removeDots(maxInput)}€`;
  return "Preis";
};
