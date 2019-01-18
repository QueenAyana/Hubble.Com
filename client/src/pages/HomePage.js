import React, { Component } from 'react';
import {Button, Container, Row, Col, Jumbotron } from "reactstrap";
import {Link} from "react-router-dom"


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
              <p className="lead">Welcome to your new Hubble page.</p>
              <hr className="my-2" />
              <p>This where you can access your Personality info and manage your Hobby list.</p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col>
            <Jumbotron>
              <Link to={"/survey"}>
                <Button className="button">Take the Survey!</Button>
              </Link>
            </Jumbotron>
          </Col>
        </Row>


      </Container>
    );
  }
}

export default HomePage;

