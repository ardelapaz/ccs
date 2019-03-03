import React, { Component } from 'react';
import { Button } from 'reactstrap'; 
import TeamView from './team_view'

class TeamPage extends Component {
constructor(props) {
    super(props)
    this.state = {
        name: null,
        logo: null,
        record: null
    }
}

getteaminfo() {

}

render() {
    return (
        <div>
            <TeamView/>
        </div>
    )
}

}

export default TeamPage;