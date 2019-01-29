import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import Carousel from './../Carousel/Carousel';


const MeatUp = (props) => {
    // console.log(props)
    return (
        <div>
            {/* hi */}
            <Modal isOpen={props.modal} toggle={props.toggleModal} className={props.className}>
                <ModalHeader toggle={props.toggleModal}>{props.hobby}</ModalHeader>
                <ModalBody>
                    <Carousel groupList={props.groupList} />
                </ModalBody>
                <ModalFooter>
                    <Button className="button" onClick={props.toggleModal}>Back</Button>
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default MeatUp;