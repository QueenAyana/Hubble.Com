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
                <h4 className="psMdl">{props.hobby.name[0]}</h4>
                <p className="psMdl">{props.hobby.link[0]}</p>
                <p className="psMdl">{props.hobby.location[0]}</p>
                <p className="psMdl">{props.hobby.description[0]}</p>
                <hr className="my-2" />
                <h4 className="psMdl">{props.hobby.name[1]}</h4>
                <p className="psMdl">{props.hobby.link[1]}</p>
                <p className="psMdl">{props.hobby.location[1]}</p>
                <p className="psMdl">{props.hobby.description[1]}</p>
                <hr className="my-2" />
                <h4 className="psMdl">{props.hobby.name[2]}</h4>
                <p className="psMdl">{props.hobby.link[2]}</p>
                <p className="psMdl">{props.hobby.location[2]}</p>
                <p className="psMdl">{props.hobby.description[2]}</p>
                <hr className="my-2" />
                <h4 className="psMdl">{props.hobby.name[3]}</h4>
                <p className="psMdl">{props.hobby.link[3]}</p>
                <p className="psMdl">{props.hobby.location[3]}</p>
                <p className="psMdl">{props.hobby.description[3]}</p>
                <hr className="my-2" />
                <h4 className="psMdl">{props.hobby.name[4]}</h4>
                <p className="psMdl">{props.hobby.link[4]}</p>
                <p className="psMdl">{props.hobby.location[4]}</p>
                <p className="psMdl">{props.hobby.description[4]}</p>
            </ModalBody>
            <ModalFooter>
                <Button className="button" onClick={props.toggleModal}>Back</Button>
            </ModalFooter>
        </Modal>
    </div >

export default MeatUp;