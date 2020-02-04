//funktionen für die inputeingaben

//prüft ob die eingabe sonderzeichen hat
export const checkSearchInput = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  //prüft ob es klein/großbuchstaben sind oder ein komma
  if (
    (ASCIICode <= 90 && ASCIICode >= 65) ||
    (ASCIICode >= 97 && ASCIICode <= 122) ||
    ASCIICode === 44
  )
    return true;
  //schaut ob es zahlen sind
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
};

//prüft die eingabe auf eine zahl
export const onlyNumberkey = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  //prüfen ob die erste zahl eine null ist
  if (e.target.value.length === 0 && ASCIICode === 48)
    return e.preventDefault();
  //prüfen ob es eine zahl ist
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
  return true;
};

//entfernt alles außer zahlen
export const removeDots = numberWithDots => {
  var temp = numberWithDots;
  temp = temp.replace(/[^0-9]/g, "");
  //wenn die erste zahl mit null anfängt es war noch möglich nachdem makieren ein 0 zu setzen
  temp = temp.replace(/\b0/, "");
  return temp;
};

//tausender punkte format
export const numberWithDots = x => {
  var number = removeDots(x);
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return number.toString();
};

//abkürzungen für tausender stellen und millionen
const abbreviateNumber = function(num) {
  //test für grenz werte
  if (num === null) return null;
  if (num < 100000) return numberWithDots(num.toString());
  //funktion
  var b = num.toPrecision(2).split("e"), // anzahl der nuller
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? num.toFixed(0) : (num / Math.pow(10, k * 3)).toFixed(1), // diviert durch die anzahl der nuller
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ["", "T", "M"][k];
  return e;
};

//max num
export const testNum = num => {
  if (Number(removeDots(num)) <= 1500000) return true;
  else return false;
};

//der String Preis ist der standartwert
export const checkInputValue = (minInput, maxInput) => {
  if (!testNum(minInput)) minInput = "";
  if (!testNum(maxInput)) maxInput = "";
  //Preis ist 0 und egal
  if (minInput === "" && maxInput === "Egal") return "Preis";
  //mininput ist größer als maxinput
  if (
    Number(removeDots(minInput)) > Number(removeDots(maxInput)) &&
    maxInput !== "" &&
    maxInput !== "Egal"
  ) {
    let temp = maxInput;
    maxInput = minInput;
    minInput = temp;
    //test für abbreviateNumber
    if (testNum(minInput) || testNum(maxInput))
      return `${abbreviateNumber(
        Number(removeDots(minInput))
      )}€ - ${abbreviateNumber(Number(removeDots(maxInput)))}€`;
    //standart rückgabe
    return `${numberWithDots(minInput)}€ - ${numberWithDots(maxInput)}€`;
  }
  //maxinput ist leer
  if (
    minInput !== "" &&
    (maxInput === "" || maxInput === "Egal" || maxInput === minInput)
  )
    return `ab ${numberWithDots(minInput)}€`;
  //mininput ist leer
  if (minInput === "" && maxInput !== "")
    return `bis ${numberWithDots(maxInput)}€`;
  //standart ausgabe
  if (minInput !== "" && maxInput !== "") {
    //test für abbreviateNumber
    if (testNum(minInput) || testNum(maxInput))
      return `${abbreviateNumber(
        Number(removeDots(minInput))
      )}€ - ${abbreviateNumber(Number(removeDots(maxInput)))}€`;
    //standart rückgabe
    return `${numberWithDots(minInput)}€ - ${numberWithDots(maxInput)}€`;
  }
  return "Preis";
};
