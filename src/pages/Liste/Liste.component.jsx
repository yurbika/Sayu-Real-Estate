import React from "react";

import Suchleiste from "../../components/suchleiste/suchleiste.component";
import { SuchleisteContainer } from "../../components/suchleiste/suchleiste.styles";

import "./Liste.styles.scss";

class Liste extends React.Component {
  render() {
    return (
      <div>
        <SuchleisteContainer additionalStyle={"liste"}>
          <Suchleiste additionalStyle={"liste"} />
        </SuchleisteContainer>
      </div>
    );
  }
}

export default Liste;
