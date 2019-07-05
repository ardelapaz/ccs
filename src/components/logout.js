import  React, { Component } from 'react';
import * as firebase from 'firebase';
import { Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';

class Logout extends Component {
constructor(props) {
    super(props);
    this.state = {
        user: null
    }
    this.authListener = this.authListener.bind(this);
    this.signOut = this.signOut.bind(this);
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

  signOut() {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
  }


    render() {
        let render;
        if(this.state.user) {
            render = 
            <li onClick = {this.signOut.bind(this)} className = {this.state.activeTab === "Support" ? 'nav-link-box-active' : 'nav-link-box'}><a className = 'nav-link-header' href="/">Logout</a></li>
        }
        return(
            <div>
             {render}
            </div>
        )
    }
}

export default Logout;