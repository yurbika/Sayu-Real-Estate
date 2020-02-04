import React from "react";

const createRegex = ruleArray => {
  let str = "(";
  for (let i = 0; i < ruleArray.length; i++) {
    str += ruleArray[i];
    if (i < ruleArray.length - 1) str += "|";
  }
  str += ")";
  let regex = new RegExp(`${str}`, "gi");
  return regex;
};

const filterData = (data, haustyp, search) => {
  let ruleArray = search.split(/[ ,]+/);
  //entfernt alles leere
  ruleArray = ruleArray.filter(i => i);
  let regex = createRegex(ruleArray);
  for (let i in data) {
    for (let typ in data[i]) {
      if (typ !== haustyp) continue;
    }
  }
};
