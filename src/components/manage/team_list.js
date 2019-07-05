import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import PlayerList from './player_list';


class team_list extends Component {
constructor(props) {
    super(props);
    this.state = {
        players: [],
        selectedTeam: '- Select a Team -'
    }
    this.teamsArray = [];
    this.players = [];
    this.teamsRef = firebase.database().ref('player-db');
    this.selectedTeam = this.selectedTeam.bind(this);
    this.storage = firebase.storage().ref();
    this.teamKey = '';
    this.showPlayers.bind(this);
}

componentWillReceiveProps() {
    this.setState({ teams: this.props.teams, selectedTeam: '- Select a Team -' });
    this.showPlayers();
}


selectedTeam(e) {
    if(e.target.value != "- Select a Team -") {
        this.players = [];
        const that = this;
        this.props.teams.map((team) => {
            if(team.team_name == e.target.value) {
                for(var key in team) {
                    that.players.push(team[key]);
                }
                    that.setState({ players: that.players, selectedTeam: team.team_name});
            }
        });
    }
}

showPlayers() {
    switch(this.props.task) {
    case "Edit player name":
        return true;
    case "Edit player picture":
        return true;
    case "Edit player social":
        return true;
    }
    console.log('test');
    return false
}

render() {
    let players;
    let show = this.showPlayers();
    if (this.state.selectedTeam != '- Select a Team -' && show != false) {
        players = <PlayerList players = {this.state.players}/>
    } else players = null

    return (
        <div>
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>Team</Label>
                  <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect" onChange = {this.selectedTeam} value = {this.state.selectedTeam}>
                    <option>- Select a Team -</option>
                    {this.props.teams.map((team) => {
                         return(
                            <option value={team.team_name}>{team.team_name}</option>
                         )
                     })}
                    </Input>
                  </Col>
                </FormGroup>
                {players}
        </div>
    )
}
}

export default team_list;
