import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Table } from "reactstrap";
import Hobbies from "../../Hobbies.json";
import { Link } from "react-router-dom";
import MeatUp from '../..//components/meetupModal';
import userAPI from './../../utils/api/user';

require("dotenv").config();

// const hobbys = Hobbies.hobbies;
// let hobbyList = [];
let hobbylink = "";
let groupRes = {
  name: [],
  link: [],
  location: [],
  description: []
}


class Profile extends Component {
  state = {
    user: "",
    meetUpModal: false,
    group: [],
    hobby: ""
  };


  componentDidMount() {
    this.getSession();
    console.log(this.props.user)
    // this.getHobbies();
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

  togglemeetUpModal = () => {
    this.setState({
      meetUpModal: !this.state.meetUpModal
    });
    // console.log(this)
  }


  apiCall = (event, hobby) => {
    event.preventDefault();
    const zipcode = this.state.user.zipcode;
    const hobbyLink = hobby;
    userAPI.getMeetUp(zipcode, hobbyLink).then((res) => {
      console.log(res);
      this.setState({
        group: res.data,
        hobby: hobby
      })

      this.togglemeetUpModal();

    })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Jumbotron className="spinJumbo">
                <h1 className="display-3">Hello, {this.props.user.first_name}</h1>
                <h4 className="hobbyJmbo">Welcome to your new Hubble page.</h4>
                <hr className="my-2" />
                <h5 className="hobbyJmb">This your Home page where you can access your</h5>
                <h5 className="hobbyJmb">Personality and manage your Hobby list.</h5>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron>
                <h1>{this.props.user.personality} is Who you are...</h1>
                <h4 >Now let's talk about what you might like to do.</h4>
                <hr className="my-2" />
                <p className="hobbyJmbo">Below you will find a list of Hobbies that might interest you. Just click on</p>
                <p className="hobbyJmbo">the buttons to see some groups related to the hobby from Meetup.com in your area.</p>
                <Table>
                  <thead>
                    <tr>
                      <th>Your Hobbies</th>
                      <th>Meetup.com Groups</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.user.hobbies.map((hobby, index) => (
                      <tr>
                        <th
                          key={index}
                          name={hobby}>{hobby}
                        </th>
                        <th>
                          <Button className="button2" name={hobby} onClick={(e) => this.apiCall(e, hobby)}>Open Info.</Button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <hr className="my-2" />
                <Link to={"/survey"}>
                  <Button className="button3">Take the Survey Again?</Button>
                </Link>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <MeatUp
          modal={this.state.meetUpModal}
          hobby={this.state.hobby}
          toggleModal={this.togglemeetUpModal}
          groupList={this.state.group}
        />
      </div>
    );
  }
}

export default Profile;

