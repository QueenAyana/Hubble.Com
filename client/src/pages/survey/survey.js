import React, { Component } from "react";
import QuestionForm from "../../components/Questions";
import userAPI from '../../utils/api/user';
import { Button, Container, Row, Col, Jumbotron, Form } from "reactstrap";
import Persona from '../../components/Survey';
// import Hobbies from "../../Hobbies.json";

// const hobbys = Hobbies.hobbies;
// let hobbyList = [];

// for (let i = 0; i < hobbys.length; i++) {
//     if (hobbyList.length <= 24) {
//         let hobby = hobbys[Math.floor(Math.random() * hobbys.length)];
//         hobbyList.push(hobby);
//     }
// }

// const personalityCore = ["Adventurous", "Mellow", "Reliable", "Thoughtful", "Charismatic", "Rational", "Social"];
// const personalityAddOn = ["Action Taker", "Inventor", "Naturalist", "Visionary", "Analyzer", "Mentor", "Planner"];
// let persona = personalityCore[Math.floor(Math.random() * personalityCore.length)] + " " + personalityAddOn[Math.floor(Math.random() * personalityAddOn.length)];

class Survey extends Component {

    state = {
        user: "",
        // hobbies: hobbyList,
        // personality: persona,
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
        console.log(this.props.user)

    }

    // givePersonality = (event) => {
    //     event.preventDefault();
    //     console.log(persona);
    //     console.log(this.state.user._id);
    //     userAPI.savePersonality({
    //         personality: this.state.personality,
    //         id: this.state.user._id,
    //     });
    //     userAPI.saveHobbies({
    //         hobbies: this.state.hobbies,
    //         id: this.state.user._id,
    //     });
    //     this.togglePersonaModal();
    // }

    // toggle = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
    togglePersonaModal = () => {
        this.setState({
            personaModal: !this.state.personaModal
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
                                    <QuestionForm name={"Q1"} question="Do you like being indoors?" />
                                    <QuestionForm name={"Q2"} question="Do you like being outdoors?" />
                                    <QuestionForm name={"Q3"} question="Do you enjoy being around people?" />
                                    <QuestionForm name={"Q4"} question="Do you enjoy interacting with people?" />
                                    <QuestionForm name={"Q5"} question="Do you enjoy participating in sports?" />
                                    <QuestionForm name={"Q6"} question="Do you enjoy competitition?" />
                                    <QuestionForm name={"Q7"} question="Do you need to win?" />
                                    <QuestionForm name={"Q8"} question="Do you like to sharpen your mind?" />
                                    <QuestionForm name={"Q9"} question="Do you like building things?" />
                                    <QuestionForm name={"Q10"} question="Do you like reading?" />
                                    <QuestionForm name={"Q11"} question="Do you like solving puzzles?" />
                                    <QuestionForm name={"Q12"} question="Do you like teaching?" />
                                    <QuestionForm name={"Q13"} question="Do you like driving?" />
                                    <QuestionForm name={"Q14"} question="Do you like walking?" />
                                    <QuestionForm name={"Q15"} question="Do you enjoy crowds?" />
                                    <QuestionForm name={"Q16"} question="Are you a technophile?" />
                                    <QuestionForm name={"Q17"} question="Do you enjoy exercise?" />
                                    <QuestionForm name={"Q18"} question="Do you enjoy working with your hands?" />
                                    <QuestionForm name={"Q19"} question="Do you like to meet new people?" />
                                    <QuestionForm name={"Q20"} question="Do you enjoy listening to music?" />
                                    <QuestionForm name={"Q21"} question="Do you enjoy making things others would enjoy?" />
                                    <QuestionForm name={"Q22"} question="Do you enjoy laughing at the lamentations of their women?" />
                                    <QuestionForm name={"Q23"} question="Do you enjoy saving the world?" />
                                    <QuestionForm name={"Q24"} question="Do you enjoy stomping their faces into the dirt?" />
                                    <Button color="success" onClick={this.togglePersonaModal} >Submit </Button>{' '}
                                </Form>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <Persona
                    modal={this.state.personaModal}
                    personality={this.props.user.personality}
                />
            </div>
        );
    }
}

export default Survey;