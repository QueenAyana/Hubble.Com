import React, { Component } from 'react';
import Footer from '../components/Landing/Footer';
import { Container, Row, Col, Jumbotron } from "reactstrap";
import { Redirect } from "react-router-dom"
import { Spinner } from 'reactstrap';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 5
    };
  }
  componentDidMount = () => {
    let timeout = setInterval(this.timer, 1000)
  }

  componentWillUnmount = () => {
  }

  timer = () => {
    if (this.state.timer === 1) {
      let clear = clearInterval()
      this.setState({ timer: 0 })
    }
    let int = this.state.timer - 1
    this.setState({ timer: int })
  }



  render() {
    if (this.state.timer === 0) {
      this.setState({ timer: 5 })
      return <Redirect to='/survey' />
    }
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
              <hr className="my-2" />
              <h2 >Welcome to your new Hubble page.</h2>
              <p>This where you will see your Personality and recomended hobies once you have taken our personality questionnaire.</p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col>
            <Jumbotron className="spinJumbo">
              <h2>Please wait while your Questions are being loaded.</h2>
              <hr className="my-2" />
              <Spinner className="spinner" color="danger" />
              <Spinner className="spinner" color="danger" />
              <Spinner className="spinner" color="danger" />
            </Jumbotron>
          </Col>
        </Row>

        <Footer />
      </Container>
    );
  }
}

export default HomePage;

