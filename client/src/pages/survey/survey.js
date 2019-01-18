import React, { Component } from "react";
import QuestionForm from "../../components/Questions";
import userAPI from '../../utils/api/user';
import { Button, Container, Row, Col, Jumbotron, Form } from "reactstrap";
import Persona from '../../components/Survey';


const personalityCore = ["Adventurous", "Mellow", "Reliable", "Thoughtful", "Charismatic", "Rational", "Social"];
const personalityAddOn = ["Action Taker", "Inventor", "Naturalist", "Visionary", "Analyzer", "Mentor", "Planner"];
let persona = personalityCore[Math.floor(Math.random() * personalityCore.length)] + " " + personalityAddOn[Math.floor(Math.random() * personalityAddOn.length)];

class Survey extends Component {

    state = {
        user: "",
        isOpen: false,
        personality: persona,
        personaModal: false,
    };

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


    componentDidMount() {
        this.getSession();
    }

    givePersonality = (event) => {
        event.preventDefault();
        console.log(persona);
        console.log(this.state.user._id);
        userAPI.savePersonality({
            personality: this.state.personality,
            id: this.state.user._id,
        });
        this.togglePersonaModal();
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    togglePersonaModal = () => {
        this.setState({
            personaModal: !this.state.personaModal,
            personality: "",
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h2>Answer these questions as honestly as possible.</h2>
                                <hr className="my-2" />
                                <Form>
                                    <QuestionForm question="Do you like being indoors?" />
                                    {/* <QuestionForm question="Do you like being outdoors?" />
                                    <QuestionForm question="Do you enjoy being around people?" />
                                    <QuestionForm question="Do you enjoy interacting with people?" />
                                    <QuestionForm question="Do you enjoy participating in sports?" />
                                    <QuestionForm question="Do you enjoy competitition?" />
                                    <QuestionForm question="Do you need to win?" />
                                    <QuestionForm question="Do you like to sharpen your mind?" />
                                    <QuestionForm question="Do you like building things?" />
                                    <QuestionForm question="Do you like reading?" />
                                    <QuestionForm question="Do you like solving puzzles?" />
                                    <QuestionForm question="Do you like teaching?" />
                                    <QuestionForm question="Do you like driving?" />
                                    <QuestionForm question="Do you like walking?" />
                                    <QuestionForm question="Do you enjoy crowds?" />
                                    <QuestionForm question="Are you a technophile?" />
                                    <QuestionForm question="Do you enjoy exercise?" />
                                    <QuestionForm question="Do you enjoy working with your hands?" />
                                    <QuestionForm question="Do you like to meet new people?" />
                                    <QuestionForm question="Do you enjoy listening to music?" />
                                    <QuestionForm question="Do you enjoy making things others would enjoy?" />
                                    <QuestionForm question="Do you enjoy laughing at the lamentations of their women?" />
                                    <QuestionForm question="Do you enjoy saving the world?" />
                                    <QuestionForm question="Do you enjoy stomping their faces into the dirt?" /> */}
                                    <Button color="success" onClick={this.givePersonality} >Submit </Button>{' '}
                                </Form>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <Persona
                    modal={this.state.personaModal}
                    personality={persona}
                />
            </div>
        );
    }
}

export default Survey;