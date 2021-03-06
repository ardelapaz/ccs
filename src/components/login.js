import React, { Component } from 'react';
import { Redirect } from 'react-dom';
import * as firebase from 'firebase';
import { Button, Form, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            user: null,
            modal: false
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

toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
    


    render() {
        return this.state.user ? (
        <Button href = "/dashboard">Click me</Button>) : (
            <div className = "login" id="centered">
                <Form className = "form">
                    <img src="../images/ccs.png" alt = "CCS" className = "ccs-login"/>
                        <Input type="email" placeholder="Email" class="border-bottom border-danger" onChange = {this.handleChange}/>
                        <Input type="password" placeholder="Password" onChange = {this.handleChange}/>
                        <Button className = "login-button" type="submit" onClick={this.onSubmit.bind(this)}>Log in</Button>
                        <br/>
                        <Button className = "login-button" type="submit" onClick={this.toggle.bind(this)}><a className = "register" href = "/register">Create an account</a></Button>
                </Form>
            </div>
        );
    }
}

export default Login;