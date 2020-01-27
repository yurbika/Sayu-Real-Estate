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

const removeDots = numberWithDots => {
  var temp = numberWithDots;
  temp = temp.replace(/\./g, "");
  return temp;
};

//tausender punkte format
export const numberWithDots = x => {
  var number = removeDots(x);
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return number.toString();
};

/*Mieten*/

//min input leer und es wird was in max input eingegeben
// es fängt immer mit 0 an
// zahl kleiner gleich 3500 -200 und es faengt bei 3000 bis 0
// zahl groeßer als 3500 -500 und dann wieder -200 bei 3000 bis 0
// solang 3000 erreicht wird wird immer -200 subtrahiert
// zahl groeßer als 7000 -1000

//max input leer und es wird was in min input eingegeben
//zahlen sind nur vom state vom min input
// zahl kleiner als 3000 +200
// zahl kleiner als 5500 +500
// zahl groeßer als 5500 +1000
// zahlen werden nur bis zu 10000 gerechnet
// am schluss gibt es immer eine angabe mit egal
