import IMMO_DATA from "./immo.data";

const createRegex = splitedStr => {
  let str = "";
  for (let i = 0; i < splitedStr.length; i++) {
    if (i === 0) str += "^(?=.*" + splitedStr[i] + ")";
    else if (i === splitedStr.length) str += "^(?=.*" + splitedStr[i] + ").*$";
    else str += "(?=.*" + splitedStr[i] + ")";
  }
  let regex = new RegExp(`${str}`, "gi");
  return regex;
};

export const filterData = (haustyp, bezugsart, search, data = IMMO_DATA) => {
  let bundeslaenderArray = [];
  let staedteOrteArray = [];
  let straßenPlzOrtArray = [];
  let suchtreffer = 0;
  let totalArrayLength = 0;
  let splitedStr = search.split(/[ ,-]+/);
  //entfernt alles leere
  splitedStr = splitedStr.filter(i => i);
  let regex = splitedStr.length > 0 ? createRegex(splitedStr) : null;
  //hier wird für bundesländer/ortschaften gefiltert davon ist die gesamt anzahl des arrays abhängig
  //deswegen gibt es dafür zwei for schleifen
  for (let i in data) {
    if (!!!data[i][haustyp]) continue;
    if (data[i][haustyp]["bezugsart"] !== bezugsart) continue;
    if (
      !bundeslaenderArray.includes(data[i][haustyp]["adresse"]["bundesland"]) &&
      !!data[i][haustyp]["adresse"]["bundesland"].match(regex) &&
      bundeslaenderArray.length < 4 &&
      search !== ""
    ) {
      bundeslaenderArray.push(data[i][haustyp]["adresse"]["bundesland"]);
    }
    if (
      !staedteOrteArray.includes(
        data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      !!data[i][haustyp]["adresse"]["stadt"].match(regex) &&
      staedteOrteArray.length < 4 &&
      search !== ""
    ) {
      staedteOrteArray.push(
        data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      );
    }
  }
  totalArrayLength = 12 - (bundeslaenderArray.length + staedteOrteArray.length);
  //hier werden alle möglichkeiten durch getestet für die kombination der straße/plz/stadt/bundesland/
  //eine adresse ist eigentlich einzigartig jedoch wird hier es trotzdem gefiltert damit es nur einmal kommt
  for (let i in data) {
    if (!!!data[i][haustyp]) continue;
    if (data[i][haustyp]["bezugsart"] !== bezugsart) continue;
    if (
      !straßenPlzOrtArray.includes(
        data[i][haustyp]["adresse"]["straße"] +
          ", " +
          data[i][haustyp]["adresse"]["postleitzahl"] +
          " - " +
          data[i][haustyp]["adresse"]["stadt"] +
          " - " +
          data[i][haustyp]["adresse"]["bundesland"]
      ) &&
      (
        data[i][haustyp]["adresse"]["straße"] +
        ", " +
        data[i][haustyp]["adresse"]["postleitzahl"] +
        " - " +
        data[i][haustyp]["adresse"]["stadt"] +
        " - " +
        data[i][haustyp]["adresse"]["bundesland"]
      ).match(regex) &&
      search !== ""
    ) {
      if (straßenPlzOrtArray.length < totalArrayLength) {
        straßenPlzOrtArray.push(
          data[i][haustyp]["adresse"]["straße"] +
            ", " +
            data[i][haustyp]["adresse"]["postleitzahl"] +
            " - " +
            data[i][haustyp]["adresse"]["stadt"] +
            " - " +
            data[i][haustyp]["adresse"]["bundesland"]
        );
      }
      suchtreffer++;
    }
  }
  return {
    bundeslaenderArray,
    staedteOrteArray,
    straßenPlzOrtArray,
    suchtreffer
  };
};
