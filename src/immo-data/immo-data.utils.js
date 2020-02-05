const createRegex = splitedStr => {
  let str = "(";
  for (let i = 0; i < splitedStr.length; i++) {
    str += splitedStr[i];
    if (i < splitedStr.length - 1) str += "|";
  }
  str += ")";
  let regex = new RegExp(`${str}`, "gi");
  return regex;
};

export const filterDatas = (data, haustyp, search) => {
  let bundesländer = [];
  let städteOrte = [];
  let straßenPlzOrt = [];
  let suchTreffer = 0;
  let splitedStr = search.split(/[ ,]+/);
  //entfernt alles leere
  splitedStr = splitedStr.filter(i => i);
  let regex = createRegex(splitedStr);
  for (let i in data) {
    if (data[i][haustyp] === undefined) continue;
    let allArrayLength =
      bundesländer.length + städteOrte.length + städteOrte.length;
    if (
      !bundesländer.includes(data[i][haustyp]["adresse"]["bundesland"]) &&
      data[i][haustyp]["adresse"]["bundesland"].match(regex) !== null &&
      data[i][haustyp]["adresse"]["bundesland"].match(regex).length >=
        splitedStr.length &&
      bundesländer.length < 4 &&
      search !== ""
    )
      bundesländer.push(data[i][haustyp]["adresse"]["bundesland"]);
    if (
      !städteOrte.includes(
        data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      data[i][haustyp]["adresse"]["stadt"].match(regex) !== null &&
      data[i][haustyp]["adresse"]["stadt"].match(regex).length >=
        splitedStr.length &&
      städteOrte.length < 4 &&
      search !== ""
    )
      städteOrte.push(
        data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      );
    //hier wird die straße geprüft
    if (
      !straßenPlzOrt.includes(
        data[i][haustyp]["adresse"]["straße"] +
          ", " +
          data[i][haustyp]["adresse"]["postleitzahl"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      data[i][haustyp]["adresse"]["straße"].match(regex) !== null &&
      data[i][haustyp]["adresse"]["straße"].match(regex).length >=
        splitedStr.length &&
      search !== ""
    ) {
      if (allArrayLength < 12) {
        straßenPlzOrt.push(
          data[i][haustyp]["adresse"]["straße"] +
            ", " +
            data[i][haustyp]["adresse"]["postleitzahl"] +
            " - " +
            data[i][haustyp]["adresse"]["bundesland"]
        );
      }
      suchTreffer++;
    }
    //hier wird die plz geprüft
    //splitedStr.length wird um eins subtrahiert um die resultate zu erhöhen
    if (
      !straßenPlzOrt.includes(
        data[i][haustyp]["adresse"]["straße"] +
          ", " +
          data[i][haustyp]["adresse"]["postleitzahl"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      data[i][haustyp]["adresse"]["postleitzahl"].match(regex) !== null &&
      data[i][haustyp]["adresse"]["postleitzahl"].match(regex).length >=
        splitedStr.length - 1 &&
      search !== ""
    ) {
      if (allArrayLength < 12) {
        straßenPlzOrt.push(
          data[i][haustyp]["adresse"]["straße"] +
            ", " +
            data[i][haustyp]["adresse"]["postleitzahl"] +
            " - " +
            data[i][haustyp]["adresse"]["bundesland"]
        );
      }
      suchTreffer++;
    }
  }
  // console.log(bundesländer, städteOrte, straßenPlzOrt);
  return { bundesländer, städteOrte, straßenPlzOrt, suchTreffer };
};
