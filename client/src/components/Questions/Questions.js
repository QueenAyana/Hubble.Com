import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const QuestionForm = props => (
        <FormGroup tag="fieldset">
            <legend>{props.question}</legend>
            <FormGroup>
                <Label>
                    <Input type="radio" name="radio1" />{' '}
                    Mostly Disagree
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" name="radio1" />{' '}
                    Slightly Disagree
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" name="radio1" />{' '}
                    Neutral
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" name="radio1" />{' '}
                    Slightly Agree
            </Label>
            </FormGroup>
            <FormGroup>
                <Label>
                    <Input type="radio" name="radio1" />{' '}
                    Mostly Agree
            </Label>
            </FormGroup>
        </FormGroup>
);

export default QuestionForm;
