//funktionen für die inputeingaben

//prüft ob die eingabe sonderzeichen hat
export const checkSearchInput = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  //prüft ob es klein/großbuchstaben sind oder ein komma
  if (
    (ASCIICode <= 90 && ASCIICode >= 65) ||
    (ASCIICode >= 97 && ASCIICode <= 122) ||
    ASCIICode === 44 ||
    ASCIICode === 32 ||
    ASCIICode === 252 ||
    ASCIICode === 220 ||
    ASCIICode === 246 ||
    ASCIICode === 214 ||
    ASCIICode === 228 ||
    ASCIICode === 196 ||
    ASCIICode === 223
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
//erwartet ein string
export const removeDots = numberWithDots => {
  if (numberWithDots === null || numberWithDots === undefined)
    return numberWithDots;
  var temp = numberWithDots;
  temp = temp.replace(/[^0-9]/g, "");
  //wenn die erste zahl mit null anfängt es war noch möglich nachdem makieren ein 0 zu setzen
  temp = temp.replace(/\b0/, "");
  return temp;
};

export const numberWithDots = str => {
  var number = removeDots(str);
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return number.toString();
};

const abbreviateNumber = function(num) {
  //test for limit values
  if (num === null) return null;
  if (num < 100000) return numberWithDots(num.toString());
  //funktion
  var b = num.toPrecision(2).split("e"), // number of zeros
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c = k < 1 ? num.toFixed(0) : (num / Math.pow(10, k * 3)).toFixed(1), // divided by the numbers of zeros
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ["", "K", "M"][k];
  return e;
};

//max num
export const testNum = num => {
  if (Number(removeDots(num)) <= 1500000) return true;
  else return false;
};

export const checkInputValue = (minInput, maxInput) => {
  if (!testNum(minInput)) minInput = "";
  if (!testNum(maxInput)) maxInput = "";
  //price is 0 and any price
  if (minInput === "" && maxInput === "") return "Price";
  //min-input is greater than max-input
  if (
    Number(removeDots(minInput)) > Number(removeDots(maxInput)) &&
    maxInput !== "" &&
    maxInput !== ""
  ) {
    let temp = maxInput;
    maxInput = minInput;
    minInput = temp;
    //test for abbreviateNumber
    if (testNum(minInput) || testNum(maxInput))
      return `${abbreviateNumber(
        Number(removeDots(minInput))
      )}€ - ${abbreviateNumber(Number(removeDots(maxInput)))}€`;
    //standard return
    return `${numberWithDots(minInput)}€ - ${numberWithDots(maxInput)}€`;
  }
  //maxinput is empty
  if (
    minInput !== "" &&
    (maxInput === "" ||
      maxInput === "" ||
      removeDots(maxInput.toString()) === removeDots(minInput.toString()))
  )
    return `from ${numberWithDots(minInput)}€`;
  //mininput is empty
  if (minInput === "" && maxInput !== "")
    return `up to ${numberWithDots(maxInput)}€`;
  //standard return
  if (minInput !== "" && maxInput !== "") {
    //test for abbreviateNumber
    if (testNum(minInput) || testNum(maxInput))
      return `${abbreviateNumber(
        Number(removeDots(minInput))
      )}€ - ${abbreviateNumber(Number(removeDots(maxInput)))}€`;
    //standard return
    return `${numberWithDots(minInput)}€ - ${numberWithDots(maxInput)}€`;
  }
  return "Price";
};
