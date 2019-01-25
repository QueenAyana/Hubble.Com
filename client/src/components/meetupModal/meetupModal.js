import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


const MeatUp = (props) => {
    // console.log(props)
    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
                <ModalHeader toggle={props.toggleModal}>{props.modalTitle}</ModalHeader>
                <ModalBody>
                    <h4>{props.hobby.name}</h4>
                    <p>{props.hobby.link}</p>
                    <p>{props.hobby.location}</p>
                    <p>{props.hobby.description}</p>
                    <hr className="my-2" />
                    {/* <h4>{props.hobby.name[1]}</h4>
                    <p>{props.hobby.link[1]}</p>
                    <p>{props.hobby.location[1]}</p>
                    <p>{props.hobby.description[1]}</p>
                    <hr className="my-2" />
                    <h4>{props.hobby.name[2]}</h4>
                    <p>{props.hobby.link[2]}</p>
                    <p>{props.hobby.location[2]}</p>
                    <p>{props.hobby.description[2]}</p>
                    <hr className="my-2" />
                    <h4>{props.hobby.name[3]}</h4>
                    <p>{props.hobby.link[3]}</p>
                    <p>{props.hobby.location[3]}</p>
                    <p>{props.hobby.description[3]}</p>
                    <hr className="my-2" />
                    <h4>{props.hobby.name[4]}</h4>
                    <p>{props.hobby.link[4]}</p>
                    <p>{props.hobby.location[4]}</p>
                    <p>{props.hobby.description[4]}</p> */}
                </ModalBody>
                <ModalFooter>
                    <Button className="button" onClick={props.toggleModal}>Back</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default MeatUp;