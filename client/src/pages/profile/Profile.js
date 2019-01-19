import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Table } from "reactstrap";
import Hobbies from "../../Hobbies.json";
import { Link } from "react-router-dom";
import MeatUp from '../..//components/meetupModal';

require("dotenv").config();

const hobbys = Hobbies.hobbies;
let hobbyList = [];

const APIkey = process.env.API_Key;
let hobbylink = "";
let URL = `https://api.meetup.com/find/groups?key=${APIkey}&sign=true&photo-host=public&zip=90274&fallback_suggestions=true&text=${hobbylink}&radius=25.0&page=20`;


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      hobbies: hobbyList,
      meetUpModal: false,
      isOpen: false,
    };
  }

  componentDidMount() {
    this.getSession();
    this.getHobbies();
    this.saveSession();
  }

  saveSession = () => {
    // Save data to sessionStorage
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
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

    // console.log(hobbys)
    // console.log(hobbyList);

  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  togglemeetUpModal = () => {
    this.setState({
      meetUpModal: !this.state.meetUpModal
    });
    console.log(this)
  }

  render() {
    return (
      <div>
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
                <Table>
                  <thead>
                    <tr>
                      <th>Your Hobbies</th>
                      <th>Meetup Info.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.hobbies.map((hobby, index) => (
                      <tr>
                        <th
                          key={index}
                          name={hobby}>{hobby}
                        </th>
                        <th>
                          <Button className="button" name={hobby} onClick={this.togglemeetUpModal}>Open Info</Button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
        <MeatUp
          modal={this.state.meetupModal}
          hobbies={this.state.hobbies}
        />
      </div>
    );
  }
}

export default Profile;

