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
                <Button className = "btn btn-danger" href = "/user/support">Edit Team</Button>
                <Team/>
            </Jumbotron>
        </div>
        )
    }
}

export default TeamView;