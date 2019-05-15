import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap'; 
import Team from './team'


class TeamView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div>
            <Jumbotron className = "team-jumbo">
                <Team/>
            </Jumbotron>
        </div>
        )
    }
}

export default TeamView;