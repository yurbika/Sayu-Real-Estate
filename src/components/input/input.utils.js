export const checkSearchInput = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  //checking for letters
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
  //checking for numbers
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
};

export const onlyNumberkey = e => {
  var ASCIICode = e.which ? e.which : e.keyCode;
  //check first value if its 0
  if (e.target.value.length === 0 && ASCIICode === 48)
    return e.preventDefault();
  //checking for numbers
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return e.preventDefault();
  return true;
};

/*
 *removes everything except numbers of value that comes in
 *function expects a string
 */
export const removeDots = numberWithDots => {
  if (numberWithDots === null || numberWithDots === undefined)
    return numberWithDots;
  var temp = numberWithDots;
  temp = temp.replace(/[^0-9]/g, "");
  //ensuring that even after typing and removing the other numbers zero still is no the first number
  temp = temp.replace(/\b0/, "");
  return temp;
};

export const thousandSeperatorDots = str => {
  var number = removeDots(str);
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return number.toString();
};

const abbreviateNumber = function(num) {
  //test for limit values
  if (num === null) return null;
  if (num < 100000) return thousandSeperatorDots(num.toString());
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
    return `${thousandSeperatorDots(minInput)}€ - ${thousandSeperatorDots(
      maxInput
    )}€`;
  }
  //maxinput is empty
  if (
    minInput !== "" &&
    (maxInput === "" ||
      maxInput === "" ||
      Number(removeDots(minInput)) === Number(removeDots(maxInput)))
  )
    return `from ${thousandSeperatorDots(minInput)}€`;
  //mininput is empty
  if (minInput === "" && maxInput !== "")
    return `up to ${thousandSeperatorDots(maxInput)}€`;
  //standard return
  if (minInput !== "" && maxInput !== "") {
    //test for abbreviateNumber
    if (testNum(minInput) || testNum(maxInput))
      return `${abbreviateNumber(
        Number(removeDots(minInput))
      )}€ - ${abbreviateNumber(Number(removeDots(maxInput)))}€`;
    //standard return
    return `${thousandSeperatorDots(minInput)}€ - ${thousandSeperatorDots(
      maxInput
    )}€`;
  }
  return "Price";
};
