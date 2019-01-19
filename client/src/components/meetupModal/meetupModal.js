import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


const MeatUp = (props) =>
    <div>
        <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
            <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
            <ModalBody>
                <h3 className="psMdl">five local Groups for the hobby </h3>
                <h3 className="psMdl">with links to their meetup page </h3>
            </ModalBody>
            <ModalFooter>
                <Button className="button" onClick={props.toggleModal}>Back</Button>
            </ModalFooter>
        </Modal>
    </div >

export default MeatUp;