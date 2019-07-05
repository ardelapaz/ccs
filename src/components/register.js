import  React, { Component } from 'react';
import * as firebase from 'firebase';
import { Route, Link } from 'react-router-dom';
import { Button, Form, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Register extends Component {
constructor(props) {
    super(props);
    this.state = {
        user: null
    }
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
        return(
            <div className = "login">
            <Form className = "form">
                    <img src="../images/ccs.png" alt = "CCS" className = "ccs-login"/>
                    <h1>Create an account</h1>
                        <Input type="email" placeholder="Email" class="border-bottom border-danger" onChange = {this.handleChange}/>
                        <Input type="password" placeholder="Password" onChange = {this.handleChange}/>
                        <Input type="text" placeholder="Discord#XXXX" class="border-bottom border-danger" onChange = {this.handleChange}/>
                        <Button className = "login-button" type="submit" onClick={this.onSubmit.bind(this)}>Create Account</Button>
                </Form>
            </div>
        )
    }
}

export default Register;