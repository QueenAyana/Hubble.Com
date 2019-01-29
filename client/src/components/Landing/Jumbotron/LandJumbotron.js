import React from "react"
import Footer from '../Footer';
import { Container, Row, Col, Jumbotron } from "reactstrap";
import ImageCarousel from "../../LandingCarousel"

const LandJumbotron = () => (
  <Container>
    <Row>
      <Col>
        <Jumbotron>
          <h1>Welcome to Hubble.Com!</h1>
          <hr className="my-2" />
          <h3>Where we help you expand your bubble to fit a new hobby!</h3>
          <p className="hobbyJmbo">Just take our amazing personality test so we can match who you are</p>
          <p className="hobbyJmbo">on the inside to what you can do on the outside</p>
          <ImageCarousel />
          <Footer />
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default LandJumbotron;