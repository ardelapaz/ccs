import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import Team from './team';

class ManageTeam extends Component {
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
                    <Team/>
                </div>
            </div>
        )
    }
}

export default ManageTeam;