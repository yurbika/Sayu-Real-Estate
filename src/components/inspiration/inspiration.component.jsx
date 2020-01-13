import React from "react";
import { Link } from "react-router-dom";

import BilderVorschauContainer from "../../components/bild-items/bild-vorschau.component";

class Inspiration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      immoData: ""
    };
  }

  render() {
    return (
      <div className="inspiration-container">
        <div className="beschreibung">
          <h1>Inspiration</h1>
          <p>Luxushäuser</p>
          <Link to="/inspiration">
            {/*dreieck */}Alle anzeigen{/*variabele Zahl*/}
          </Link>
        </div>
        {/*Bild-Container */}
        {/*Button => Mehr anzeigen */}
      </div>
    );
  }
}

export default Inspiration;
