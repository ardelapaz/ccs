import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import Team from './team';

class TeamList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null
        }
    }

    

    render() {
        return (
                <div className = "centered">
                    <Jumbotron className = "team-list-jumbo">
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                        <Team/>
                    </Jumbotron>
                </div>
        )
    }
}

export default TeamList;