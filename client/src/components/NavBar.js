import React, { Component } from 'react';
import userAPI from './../utils/api/user';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
} from 'reactstrap';
import SignUp from './SignUpModal';
import SignIn from './SignInModal';
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Hobbies from "../Hobbies.json";
import './NavBar.css';


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

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            zipcode: "",
            personality: "",
            hobbies: [],
            signUpModal: false,
            signInModal: false,
            signedUp: false,
            activeUser: false
        };
    }
    toggleSignInModal = () => {
        this.setState({
            signInModal: !this.state.signInModal,
            username: "",
            password: "",
        });
    }
    toggleSignUpModal = () => {
        this.setState({
            signUpModal: !this.state.signUpModal,
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            zipcode: "",
            // personality: persona,
            // hobbies: hobbyList,
            signedUp: false
        });
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    signIn = () => {
        const { username, password } = this.state;
        userAPI.loginUser({ username, password }).then(({ data }) => {
            this.props.signInUser(data);
            this.toggleSignInModal();
        })
    }
    signOut = () => {
        this.props.signOutUser();
    }
    signUp = () => {
        const { username, email, password, first_name, last_name, zipcode, personality, hobbies, activeUser } = this.state
        userAPI.createUser({ username, email, password, first_name, last_name, zipcode, personality, hobbies, activeUser  }).then((res) => {
            this.setState({ signedUp: true });
            setTimeout(() => {
                this.toggleSignUpModal();
                this.toggleSignInModal();
            }, 2000)
        });
    }
    inputHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" className="nav">
                    <NavbarBrand href="/">Hubble.Com</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {this.props.signedIn ?
                                    <div className="user-info">
                                        <FaUser /><p>{this.props.user.username}</p>
                                        <Link to={"/"}>
                                            <Button className="button" onClick={this.signOut}>Sign Out</Button>
                                        </Link>
                                    </div>
                                    :
                                    <div>
                                        <Button className="button" onClick={this.toggleSignInModal}>Sign In</Button>
                                        <Button className="button" onClick={this.toggleSignUpModal}>Sign Up</Button>
                                    </div>
                                }
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <SignUp
                    modal={this.state.signUpModal}
                    modalTitle={"Enter in information to sign up"}
                    toggleModal={this.toggleSignUpModal}
                    username={this.state.username}
                    email={this.state.email}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    password={this.state.password}
                    zipcode={this.state.zipcode}
                    inputHandler={this.inputHandler}
                    signUp={this.signUp}
                    signedUp={this.state.signedUp}
                />
                <SignIn
                    modalTitle={"Enter in information to sign in"}
                    modal={this.state.signInModal}
                    toggleModal={this.toggleSignInModal}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    inputHandler={this.inputHandler}
                    signIn={this.signIn}
                />
            </div>
        );
    }
}

export default NavBar;

