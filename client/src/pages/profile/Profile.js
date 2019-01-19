import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, ListGroup, ListGroupItem } from "reactstrap";
import Hobbies from "../../Hobbies.json";
import { Link } from "react-router-dom";



const hobbys = Hobbies.hobbies
let hobbyList = [];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      hobbies: []
    };
  }

  componentDidMount() {
    this.getSession();
    this.getHobbies();
  }

  getSession = () => {
    // Get saved data from localStorage
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ 'user': value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  getHobbies = () => {
    for (let i = 0; i < hobbys.length; i++) {
      if (hobbyList.length <= 24) {
        let hobby = hobbys[Math.floor(Math.random() * hobbys.length)];
        hobbyList.push(hobby);
      }
    }
    this.setState({
      hobbies: hobbyList
    })
    // console.log(hobbys)
    // console.log(hobbyList);

  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
              <h4 className="hobbyJmbo">Welcome to your new Hubble page.</h4>
              <hr className="my-2" />
              <p className="hobbyJmb">This your Home page where you can access your Personality info and manage your Hobby list.</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <h1>{this.props.user.personality} is Who you are...</h1>
              <h4 className="hobbyJmbo">Now let's talk about what you might like to do.</h4>
              <hr className="my-2" />
                  <ListGroup>
                    {this.state.hobbies.map((hobby, index)=>(
                      <ListGroupItem 
                      key={index}>{hobby}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <Link to={"/survey"}>
                <Button className="button">Take the Survey Again?</Button>
              </Link>
              {/* <Link to={"/profile"}>
                <Button className="button">Go to Your Page!</Button>
              </Link> */}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;

