import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';


class support extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "standings-jumbo support-jumbo">
                <div className = "support-container">
                    <img src = "../images/email.png" alt = "Sponsors" className = "support-image"/>
                    <h1>Support</h1>
                </div>
                    <div className = "support-container">
                        <div className = "support-info">
                            <h3 className = "support-text">If you would like to contact an admin, this is the place to do it. Before we get started through, please keep these things in mind:</h3>
                                <ul>
                                    <li className = "support-bullets">There is no guarentee your issue will resolve the way you want it to</li>
                                    <li className = "support-bullets">We are all volunteers!</li>
                                    <li className = "support-bullets">Include as much information as you can while keeping it short</li>
                                    <li className = "support-bullets">Pick the correct region / topic</li>
                                    <li className = "support-bullets">Do not bother the admins on discord</li>
                                </ul>
                        </div>
                    </div>
                    <div className = "support-container">
                        <Form>
                            <FormGroup row>
                                  <Label for="exampleSelect" sm={2}>Region</Label>
                                  <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect">
                                    <option>- Select a region -</option>
                                    <option>NA</option>
                                    <option>EU</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="exampleEmail" sm={2}>Username</Label>
                                  <Col sm={10}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your username here" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="exampleEmail" sm={2}>Email</Label>
                                  <Col sm={10}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email here" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="examplePassword" sm={2}>Discord</Label>
                                  <Col sm={10}>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Discord#---" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="exampleSelect" sm={2}>Topic</Label>
                                  <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect">
                                    <option>- Select a topic -</option>
                                    <option>Roster change</option>
                                    <option>Scheduling issue</option>
                                    <option>Edit roster information</option>
                                    <option>Edit team information</option>
                                    <option>'other'</option>
                                    </Input>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="exampleText" sm={2}>Explain your issue:</Label>
                                  <Col sm={10}>
                                    <Input type="textarea" name="text" id="exampleText" />
                                  </Col>
                                </FormGroup>
                                <FormGroup check>
                                  <Label check>
                                    <Input type="checkbox" /> "By submitting this form you hereby accept that your reasoning behind submitting this is pure and action can be taken if intentions are otherwise" 
                                    but reworded
                                  </Label>
                                </FormGroup>
                                <p className = "support-text">Please allow 24-48 hours for a response.</p>
                        </Form>
                    </div>
            </div>
        )
    }
}

export default support;