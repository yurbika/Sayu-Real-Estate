import React from "react";

import { ID_GENERATOR } from "../../uniqueKey";

import "./page-changer.styles.scss";

const PageChanger = ({ anzahlSeiten, num }) => {
  let optionsArray = [];
  for (let i = 0; i < anzahlSeiten - 1; i++) {
    optionsArray.push(1 + i);
  }

  return (
    <div className="page-changer-container">
      <select>
        {optionsArray.map(item => (
          <option key={ID_GENERATOR("page-changer-options-")} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageChanger;
