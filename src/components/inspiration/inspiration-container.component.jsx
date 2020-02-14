import React from "react";
import { connect } from "react-redux";
import { filterDataWithFilter } from "../../immo-data/immo-data.utils";

//component imports
import BilderVorschauContainer from "../bilder-container/bildvorschau-container.component";
import Button from "../button/button.component";

//redux imports
import { toggleExpand } from "../../redux/inspiration-sketion/inspiration.action";

//style import
import "./inspiration.styles.scss";

const InspirationContainer = ({
  children,
  expand,
  toggleExpand,
  toggleExpandButtonNum,
  filter
}) => (
  <div className={"inspiration-container " + (expand ? "big" : "")}>
    <div className="beschreibung">{children}</div>
    <BilderVorschauContainer
      expand={expand}
      immoArray={filterDataWithFilter(filter)}
    />
    <Button aktionsButton onClick={() => toggleExpand(toggleExpandButtonNum)}>
      Mehr anzeigen
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleExpand: num => dispatch(toggleExpand(num))
});

export default connect(null, mapDispatchToProps)(InspirationContainer);
