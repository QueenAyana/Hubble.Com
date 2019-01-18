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
                <h3 className="psMdl">Congrat's you fit the</h3>
                <hr className="my-2" />
                <h1 className="psMdlP">{props.personality}</h1>
                <hr className="my-2" />
                <h3 className="psMdl">Personality!!!</h3>
            </ModalBody>
            <ModalFooter>
                <Link to="/profile">
                    <Button className="button">To Your Profile</Button>
                </Link>
            </ModalFooter>
        </Modal>
    </div >

export default Persona;

