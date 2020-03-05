import React from "react";

import Button from "../../components/button/button.component";
import AuswahlDropdown from "../../components/dropdowns/auswahl-dropdown.component";

import { ID_GENERATOR } from "../../uniqueKey";

import "./page-changer.styles.scss";

class PageChanger extends React.Component {
  render() {
    const { anzahlSeiten } = this.props;
    let optionsArray = [];
    for (let i = 0; i < anzahlSeiten - 1; i++) {
      optionsArray.push(1 + i);
    }

    return (
      <div className="page-changer-container">
        <Button pageChanger></Button>
        <Button pageChanger dropdown>
          <AuswahlDropdown additionalStyle={"page-changer"}>
            {optionsArray}
          </AuswahlDropdown>
        </Button>
      </div>
    );
  }
}

export default PageChanger;
