import React, { Component } from 'react';
import Schedule from './schedule/schedule';
import Logout from './logout';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render() {
        return (
                <div className = "navigation-header">

                <a href = "/" className = "main-image"><img src='../../images/ccs.png' href = "/" alt="ccs" className = "nav-logo" id = "nav-logo"/></a>
                <div className = "nav-background"></div>
                <ul className = "nav-links">
                          <li onClick = { (e) => this.toggle(e, 2)} className = 'nav-link-box'><a className = 'nav-link-header' href="/schedule">Schedule</a></li>
                          <li onClick = { (e) => this.toggle(e, 3)} className = 'nav-link-box'><a className = 'nav-link-header' href="/standings">Standings</a></li>
                          <li onClick = { (e) => this.toggle(e, 5)} className = 'nav-link-box'><a className = 'nav-link-header' href="/team">My Team</a></li>
                          <li onClick = { (e) => this.toggle(e, 6)} className = 'nav-link-box'><a className = 'nav-link-header' href="/support">Support</a></li>
                          <Logout />
                </ul> 
                </div>   
        )
    }
}

export default navigation;