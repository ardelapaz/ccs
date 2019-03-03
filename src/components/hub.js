import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import Team from '../components/teams/team';
import Sponsors from '../components/sponsors'

class Hub extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null
        }
    }

    

    render() {
        return (
            <div className = "main-content">
                <div className = "main-page" id = "centered">
                <Jumbotron className = "edit-jumbotron">
                    <img src="../images/teams/g2.png" alt = "G2" className = "edit-team"/>
                    <div className = "edit-team-welcome">
                        <li className = "welcome-text">WELCOME,  <a className = "test" href = "/user" >{this.state.name || "THE3RDWALKER"} </a> </li>
                        <p className="lead">Your next game is against Cloud9 on 12/21/12</p>
                        <p>Your team is currently 1st place, with a record of 10-2</p>
                    </div>
                </Jumbotron>
                </div>
            </div>
        )
    }
}

export default Hub;