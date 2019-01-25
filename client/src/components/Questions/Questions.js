import React from "react";
import { FormGroup, Label, Input } from 'reactstrap';

const QuestionForm = props => (
        <FormGroup tag="fieldset">
            <legend>{props.question}</legend>
            <FormGroup>
                <Label>
                    <Input type="radio" name={props.name} />{' '}
                    Mostly Disagree
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" ame={props.name} />{' '}
                    Slightly Disagree
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" ame={props.name} />{' '}
                    Neutral
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" ame={props.name} />{' '}
                    Slightly Agree
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" ame={props.name} />{' '}
                    Mostly Agree
            </Label>
            </FormGroup>
        </FormGroup>
);

export default QuestionForm;
