import React from "react";

//component
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

//utils
import errorImg from "../../assets/error.png";

//styles
import "./error.styles.scss";

const ErrorPage = () => (
  <div className="container">
    <Header />
    <div className="content-container">
      <img src={errorImg} alt="Error 404: " />
      <div className="text-container">
        <h2>This Page is Not on the Map</h2>
        <span>
          You told your friends you weren’t bringing your phone, to try and
          experience what travel was like back in the day. You bought a map and
          a bottle of water and carried your camera for the money shot. But the
          map was from 2005 and the landscape had changed. So here you are, in
          the middle of a large field, that the map continues to claim is a
          local grocer.
        </span>
      </div>
    </div>
    <Footer errorPage />
  </div>
);

export default ErrorPage;
