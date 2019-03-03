import React, { Component } from 'react';
import { Redirect } from 'react-dom';
import * as firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            user: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.authListener = this.authListener.bind(this);
}


componentDidMount() {
    this.authListener();
}
componentWillUnmount() {
    this.authListener();
}

  authListener() {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    }.bind(this));
  }

    handleChange(e) {
        console.log(this.state.email);
        this.setState({ [e.target.type]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    


    render() {
        return this.state.user ? (
        <Button href = "/dashboard">Click me</Button>) : (
            <div className = "login" id="centered">
                <Form className = "form">
                    <img src="../images/ccs.png" alt = "CCS" className = "ccs-login"/>
                    <FormGroup controlId="formHorizontalEmail"  >
                        <Input type="email" placeholder="Email" class="border-bottom border-danger" onChange = {this.handleChange}/>
                     </FormGroup>

                     <FormGroup controlId="formHorizontalPassword" >
                        <Input type="password" placeholder="Password" onChange = {this.handleChange}/>
                     </FormGroup>

                     <FormGroup>
                         <Button type="submit" onClick={this.onSubmit.bind(this)}>Log in</Button>
                      </FormGroup>
                </Form>
                {/* <Row>
                    <Input type="email" label="Email" s={12} onChange={this.handleChange.bind(this)} />
                    <Input type="password" label="password" s={12} onChange={this.handleChange.bind(this)} />
                    <Button waves='light' color='red' onClick={this.onSubmit.bind(this)}>Sign In</Button>
                </Row>             */}
            </div>
        );
    }
}

export default Login;