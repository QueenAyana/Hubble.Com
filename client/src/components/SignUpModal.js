import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, InputGroup, InputGroupAddon, Input, Alert
} from 'reactstrap';

const SignUp = (props) =>
    <div>
        <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
            <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
            <ModalBody>
                {props.signedUp ?
                    <Alert color="success">
                        Account Created for {props.first_name} {props.last_name}
                    </Alert>
                    :
                    <div>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Username:</InputGroupAddon>
                            <Input placeholder="username" name="username" value={props.username} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Password:</InputGroupAddon>
                            <Input placeholder="password" type="password" name="password" value={props.password} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">First Name:</InputGroupAddon>
                            <Input placeholder="first name" type="text" name="first_name" value={props.first_name} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Last Name:</InputGroupAddon>
                            <Input placeholder="last name" type="text" name="last_name" value={props.last_name} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Email:</InputGroupAddon>
                            <Input placeholder="email" type="email" name="email" value={props.email} onChange={props.inputHandler} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Zipcode:</InputGroupAddon>
                            <Input placeholder="zipcode"  type="text" name="zipcode" value={props.zipcode} onChange={props.inputHandler} />
                        </InputGroup>
                    </div>}
            </ModalBody>
            <ModalFooter>
                <Button className="button" onClick={props.signUp}>Sign Up</Button>
                <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div >

export default SignUp;

