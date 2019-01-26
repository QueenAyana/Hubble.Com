import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { Survey } from './pages/survey';
import { Profile } from './pages/profile';
import NavBar from './components/NavBar';
import LandJumbotron from './components/Landing/Jumbotron';
import userAPI from './utils/api/user';
import Hobbies from "./Hobbies.json";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const hobbys = Hobbies.hobbies;
// let hobbyList = [];

// for (let i = 0; i < hobbys.length; i++) {
//   if (hobbyList.length <= 24) {
//     let hobby = hobbys[Math.floor(Math.random() * hobbys.length)];
//     hobbyList.push(hobby);
//   }
// }

// const personalityCore = ["Adventurous", "Mellow", "Reliable", "Thoughtful", "Charismatic", "Rational", "Social"];
// const personalityAddOn = ["Action Taker", "Inventor", "Naturalist", "Visionary", "Analyzer", "Mentor", "Planner"];
// let persona = personalityCore[Math.floor(Math.random() * personalityCore.length)] + " " + personalityAddOn[Math.floor(Math.random() * personalityAddOn.length)];

class App extends Component {

  state = {
    signedIn: false,
    user: null,
    // hobbies: hobbyList,
    // personality: persona,
  }

  signInUser = (user) => {
    this.setState({ signedIn: true, user });
    this.saveSession();
    console.log(this.state.user)

  }

  signOutUser = () => {
    this.setState({ signedIn: false, user: null });
    this.clearSession();
  }

  componentDidMount() {
    this.getSession();
    // this.savePersonaHobby();
    window.addEventListener(
      "beforeunload",
      this.saveSession.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveSession.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveSession();
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
          // this.setState({ 'signedIn': value });
          this.setState({ 'user': value, 'signedIn': value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveSession = () => {
    // Save data to sessionStorage
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  clearSession = () => {
    // Remove all saved data from sessionStorage
    localStorage.clear();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar signedIn={this.state.signedIn} signInUser={this.signInUser} signOutUser={this.signOutUser} user={this.state.user} />
          {this.state.signedIn ?
            <Switch>
              <Route exact path="/" component={() => <HomePage user={this.state.user} />} />
              <Route exact path="/survey" component={() => <Survey user={this.state.user} />}/>
              <Route exact path="/profile" component={() => <Profile user={this.state.user}  />} />
            </Switch>
            :
            <LandJumbotron />
          }
        </div>
      </Router>
    );

  }
}

export default App;
