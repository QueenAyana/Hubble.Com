import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { Link } from "react-router-dom"

const Persona = (props) =>
    <div>
        <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
            <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
            <ModalBody>
                <h3 className="psMdl">five local Groups for the hobby </h3>
                <h3 className="psMdl">with links to their meetup page </h3>
            </ModalBody>
            <ModalFooter>
                <Link to="/profile">
                    <Button className="button">To Your Profile</Button>
                </Link>
            </ModalFooter>
        </Modal>
    </div >

export default Persona;

