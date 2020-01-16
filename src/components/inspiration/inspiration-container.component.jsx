import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import BilderVorschauContainer from "../bilder-container/bild-container.component";
import Button from "../button/button.component";

import { toggleExpand } from "../../redux/inspiration-sketion/inspiration.action";

import "./inspiration.styles.scss";

const InspirationContainer = ({ children, expand, toggleExpand }) => (
  <div className={"inspiration-container " + (expand ? "big" : "")}>
    <div className="beschreibung">
      {children}
      <Link to="/inspiration">
        {/*dreieck */}Alle anzeigen{/*variabele Zahl*/}
      </Link>
    </div>
    <BilderVorschauContainer expand={expand} />
    <Button aktionsButton onClick={toggleExpand}>
      Mehr anzeigen
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleExpand: () => dispatch(toggleExpand())
});

const mapStateToProps = ({ inspirationsSketion: { expand } }) => ({
  expand
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationContainer);
