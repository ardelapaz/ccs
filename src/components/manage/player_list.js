import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';


class player_list extends Component {
constructor(props) {
    super(props);
    this.state = {
        players: [],
        selectedPlayer: ''
    }
    this.playersArray = [];
    this.dataRef = firebase.database().ref('player-db');
    this.selectedPlayer = this.selectedPlayer.bind(this);
    this.storage = firebase.storage().ref();
}

componentWillReceiveProps() {
    this.setState({ players: this.props.players, selectedPlayer: '' });
}

selectedPlayer(e) {
    if(e.target.value != "- Select a Player -") {
    const that = this;
    this.props.players.map((player) => {
        if(player.player_name == e.target.value) {
             that.setState({ selectedPlayer: player.player_name }); 
        }
    });
    }
    this.setState({ players: [] });
}

render() {
    return (
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>Player</Label>
                  <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect" onChange = {this.selectedPlayer} value = {this.state.selectedPlayer}>
                    <option>- Select a Player -</option>
                    {this.props.players.map((player) => {
                        if(player.player_name) {
                         return(
                            <option value={player.player_name}>{player.player_name}</option>
                         )
                        }
                     })}
                    </Input>
                  </Col>
                </FormGroup>
        )
    }
}

export default player_list;
