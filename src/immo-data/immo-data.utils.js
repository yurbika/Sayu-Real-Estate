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

const testMatch = (totalStringsLength, currentDataArray) => {
  let templength = 0;
  for (let i in currentDataArray) {
    console.log(currentDataArray[i]);
    if (!!!currentDataArray[i]) templength += 0;
    else templength += currentDataArray[i].toString().length;
  }
  if (templength === totalStringsLength) return true;
  else return false;
};

export const filterDatas = (data, haustyp, bezugsart, search) => {
  let bundeslaenderArray = [];
  let staedteOrteArray = [];
  let straßenPlzOrtArray = [];
  let suchtreffer = 0;
  let totalArrayLength = 0;
  let totalStringsLength = 0;
  let splitedStr = search.split(/[ ,-]+/);
  //entfernt alles leere
  splitedStr = splitedStr.filter(i => i);
  let regex = splitedStr.length > 0 ? createRegex(splitedStr) : null;
  for (let i in splitedStr) totalStringsLength += splitedStr[i].length;

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
      search !== ""
    ) {
      if (!!data[i][haustyp]["adresse"]["stadt"].match(regex)) console.log();
      if (
        testMatch(totalStringsLength, [
          data[i][haustyp]["adresse"]["stadt"].match(regex)
        ])
      )
        console.log(
          data[i][haustyp]["adresse"]["straße"] +
            ", " +
            data[i][haustyp]["adresse"]["postleitzahl"] +
            " - " +
            data[i][haustyp]["adresse"]["stadt"] +
            " - " +
            data[i][haustyp]["adresse"]["bundesland"]
        );
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

// das ergebniss in ein string verwandeln dann match in ein if werfen und es es stimmt ins array werfen
// https://stackoverflow.com/questions/469913/regular-expressions-is-there-an-and-operator
// ^(?=.*nürnberg)(?=.*bayern)(?=.*90).*$

// //------------------3------------------//
// if (
//   !!data[i][haustyp]["adresse"]["postleitzahl"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["straße"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["stadt"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["straße"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString()
//     ])
//   ) {
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       straßenPlzOrtArray.pop();
//       console.log("hi");
//     }
//     straßenPlzOrtArray.unshift(
//       data[i][haustyp]["adresse"]["straße"] +
//         ", " +
//         data[i][haustyp]["adresse"]["postleitzahl"] +
//         " - " +
//         data[i][haustyp]["adresse"]["stadt"] +
//         " - " +
//         data[i][haustyp]["adresse"]["bundesland"]
//     );
//     suchtreffer++;
//   }
// } else if (
//   !!data[i][haustyp]["adresse"]["postleitzahl"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["stadt"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["bundesland"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["bundesland"].match(regex).toString()
//     ])
//   ) {
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       straßenPlzOrtArray.pop();
//       console.log("hi");
//     }
//     straßenPlzOrtArray.unshift(
//       data[i][haustyp]["adresse"]["straße"] +
//         ", " +
//         data[i][haustyp]["adresse"]["postleitzahl"] +
//         " - " +
//         data[i][haustyp]["adresse"]["stadt"] +
//         " - " +
//         data[i][haustyp]["adresse"]["bundesland"]
//     );
//     suchtreffer++;
//   }
// } else if (
//   !!data[i][haustyp]["adresse"]["postleitzahl"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["straße"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["bundesland"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["straße"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["bundesland"].match(regex).toString()
//     ])
//   ) {
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       straßenPlzOrtArray.pop();
//       console.log("hi");
//     }
//     straßenPlzOrtArray.unshift(
//       data[i][haustyp]["adresse"]["straße"] +
//         ", " +
//         data[i][haustyp]["adresse"]["postleitzahl"] +
//         " - " +
//         data[i][haustyp]["adresse"]["stadt"] +
//         " - " +
//         data[i][haustyp]["adresse"]["bundesland"]
//     );
//     suchtreffer++;
//   }
// } else if (
//   !!data[i][haustyp]["adresse"]["straße"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["stadt"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["bundesland"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["straße"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["bundesland"].match(regex).toString()
//     ])
//   )
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       straßenPlzOrtArray.pop();
//       console.log("hi");
//     }
//   straßenPlzOrtArray.unshift(
//     data[i][haustyp]["adresse"]["straße"] +
//       ", " +
//       data[i][haustyp]["adresse"]["postleitzahl"] +
//       " - " +
//       data[i][haustyp]["adresse"]["stadt"] +
//       " - " +
//       data[i][haustyp]["adresse"]["bundesland"]
//   );
//   suchtreffer++;
// }
// //--------------------2--------------------//
// else if (
//   !!data[i][haustyp]["adresse"]["postleitzahl"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["bundesland"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["bundesland"].match(regex).toString()
//     ])
//   ) {
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       console.log("hi");
//       straßenPlzOrtArray.pop();
//     }
//     straßenPlzOrtArray.unshift(
//       data[i][haustyp]["adresse"]["straße"] +
//         ", " +
//         data[i][haustyp]["adresse"]["postleitzahl"] +
//         " - " +
//         data[i][haustyp]["adresse"]["stadt"] +
//         " - " +
//         data[i][haustyp]["adresse"]["bundesland"]
//     );
//     suchtreffer++;
//   }
// } else if (
//   !!data[i][haustyp]["adresse"]["postleitzahl"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["straße"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["straße"].match(regex).toString()
//     ])
//   ) {
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       console.log("hi");
//       straßenPlzOrtArray.pop();
//     }
//     straßenPlzOrtArray.unshift(
//       data[i][haustyp]["adresse"]["straße"] +
//         ", " +
//         data[i][haustyp]["adresse"]["postleitzahl"] +
//         " - " +
//         data[i][haustyp]["adresse"]["stadt"] +
//         " - " +
//         data[i][haustyp]["adresse"]["bundesland"]
//     );
//     suchtreffer++;
//   }
// } else if (
//   !!data[i][haustyp]["adresse"]["postleitzahl"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["stadt"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString()
//     ])
//   ) {
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       console.log("hi");
//       straßenPlzOrtArray.pop();
//     }
//     straßenPlzOrtArray.push(
//       data[i][haustyp]["adresse"]["straße"] +
//         ", " +
//         data[i][haustyp]["adresse"]["postleitzahl"] +
//         " - " +
//         data[i][haustyp]["adresse"]["stadt"] +
//         " - " +
//         data[i][haustyp]["adresse"]["bundesland"]
//     );
//     suchtreffer++;
//   }
// } else if (
//   !!data[i][haustyp]["adresse"]["straße"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["stadt"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["straße"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString()
//     ])
//   )
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       console.log("hi");
//       straßenPlzOrtArray.pop();
//     }
//   straßenPlzOrtArray.unshift(
//     data[i][haustyp]["adresse"]["straße"] +
//       ", " +
//       data[i][haustyp]["adresse"]["postleitzahl"] +
//       " - " +
//       data[i][haustyp]["adresse"]["stadt"] +
//       " - " +
//       data[i][haustyp]["adresse"]["bundesland"]
//   );
//   suchtreffer++;
// } else if (
//   !!data[i][haustyp]["adresse"]["stadt"].match(regex) &&
//   !!data[i][haustyp]["adresse"]["bundesland"].match(regex)
// ) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString(),
//       data[i][haustyp]["adresse"]["bundesland"].match(regex).toString()
//     ])
//   )
//     while (straßenPlzOrtArray.length >= totalArrayLength) {
//       console.log("hi");
//       straßenPlzOrtArray.pop();
//     }
//   straßenPlzOrtArray.unshift(
//     data[i][haustyp]["adresse"]["straße"] +
//       ", " +
//       data[i][haustyp]["adresse"]["postleitzahl"] +
//       " - " +
//       data[i][haustyp]["adresse"]["stadt"] +
//       " - " +
//       data[i][haustyp]["adresse"]["bundesland"]
//   );
//   suchtreffer++;
// }
// //-----------------------1-------------------------//
// else if (!!data[i][haustyp]["adresse"]["stadt"].match(regex)) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["stadt"].match(regex).toString()
//     ])
//   ) {
//     if (straßenPlzOrtArray.length < totalArrayLength) {
//       straßenPlzOrtArray.push(
//         data[i][haustyp]["adresse"]["straße"] +
//           ", " +
//           data[i][haustyp]["adresse"]["postleitzahl"] +
//           " - " +
//           data[i][haustyp]["adresse"]["stadt"] +
//           " - " +
//           data[i][haustyp]["adresse"]["bundesland"]
//       );
//     }
//     suchtreffer++;
//   }
// } else if (!!data[i][haustyp]["adresse"]["bundesland"].match(regex)) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["bundesland"].match(regex).toString()
//     ])
//   ) {
//     if (straßenPlzOrtArray.length < totalArrayLength) {
//       straßenPlzOrtArray.push(
//         data[i][haustyp]["adresse"]["straße"] +
//           ", " +
//           data[i][haustyp]["adresse"]["postleitzahl"] +
//           " - " +
//           data[i][haustyp]["adresse"]["stadt"] +
//           " - " +
//           data[i][haustyp]["adresse"]["bundesland"]
//       );
//     }
//     suchtreffer++;
//   }
// } else if (!!data[i][haustyp]["adresse"]["straße"].match(regex)) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["straße"].match(regex).toString()
//     ])
//   ) {
//     if (straßenPlzOrtArray.length < totalArrayLength) {
//       straßenPlzOrtArray.push(
//         data[i][haustyp]["adresse"]["straße"] +
//           ", " +
//           data[i][haustyp]["adresse"]["postleitzahl"] +
//           " - " +
//           data[i][haustyp]["adresse"]["stadt"] +
//           " - " +
//           data[i][haustyp]["adresse"]["bundesland"]
//       );
//     }
//     suchtreffer++;
//   }
// } else if (!!data[i][haustyp]["adresse"]["postleitzahl"].match(regex)) {
//   if (
//     testMatch(totalStringsLength, [
//       data[i][haustyp]["adresse"]["postleitzahl"].match(regex).toString()
//     ])
//   ) {
//     if (straßenPlzOrtArray.length < totalArrayLength) {
//       straßenPlzOrtArray.push(
//         data[i][haustyp]["adresse"]["straße"] +
//           ", " +
//           data[i][haustyp]["adresse"]["postleitzahl"] +
//           " - " +
//           data[i][haustyp]["adresse"]["stadt"] +
//           " - " +
//           data[i][haustyp]["adresse"]["bundesland"]
//       );
//     }
//     suchtreffer++;
//   }
// }
