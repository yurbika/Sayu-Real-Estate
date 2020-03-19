import React from "react";

//component
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

//utils
import errorImg from "../../assets/error.png";

//styles
import { Container, Content, TextContainer } from "./error.styles";

const ErrorPage = () => (
  <Container>
    <Header />
    <Content>
      <img src={errorImg} alt="Error 404: " />
      <TextContainer>
        <h2>This Page is Not on the Map</h2>
        <span>
          You told your friends you weren’t bringing your phone, to try and
          experience what travel was like back in the day. You bought a map and
          a bottle of water and carried your camera for the money shot. But the
          map was from 2005 and the landscape had changed. So here you are, in
          the middle of a large field, that the map continues to claim is a
          local grocer.
        </span>
      </TextContainer>
    </Content>
    <Footer errorPage />
  </Container>
);

export default ErrorPage;
