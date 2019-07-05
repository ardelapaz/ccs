import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import TeamList from './team_list';
import TeamForm from './team_form';


class edit_team_form extends Component {
constructor(props) {
    super(props);
    this.state = {
        db: [],
        regions : [],
        na_teams: [],
        eu_teams: [],
        selectedRegionTeams: [],
        loaded: false,
        task: ''
    }
    this.db = [];
    this.regions = [];
    this.na_teams = [];
    this.eu_teams = [];
    this.selectedRegionTeams = [];
    this.regionsRef = firebase.database().ref('player-db');
    this.teamRef = '';
    this.selectedRegion = this.selectedRegion.bind(this);
    this.selectedTask = this.selectedTask.bind(this);

}

async componentDidMount() {
    const that = this;
    const other = that;
    await this.regionsRef.on('child_added', snapshot => {
        const db = snapshot.val();
        this.regions.push(db.region);
        that.db.push(db);
        that.teamRef = firebase.database().ref('player-db/' + snapshot.key);
        that.teamRef.on('child_added', snapshot => {
          var team = snapshot.val();
          if (db.region == "NA") {
            if(team != "NA") {
              other.na_teams.push(team);
            }
          } else if (db.region == "EU") {
            if(team != "EU") {
              other.eu_teams.push(team);
            }
          }
          });
    this.setState({ db: this.db, regions: this.regions, na_teams: this.na_teams, eu_teams: this.eu_teams, loaded: true });
    });
} 

selectedRegion(e) {
    if(e.target.value != "- Select a Region -") {
        this.selectedRegionTeams = [];
            switch(e.target.value) {
                case "NA":
                  this.setState({ selectedRegionTeams : this.state.na_teams});
                  break;
              case "EU":
                  this.setState({ selectedRegionTeams : this.state.eu_teams});
                  break;
        }
    }
}

selectedTask(e) {
  if(e.target.value != '- Select a Task -') {
    this.setState({ task: e.target.value});
  } else
  this.setState ({ task: '' });
}

content() {
    return (
        <div className = "support-container">
        <Form>
        <FormGroup row>
                  <Label for="exampleSelect" sm={2}>Select Task</Label>
                  <Col sm={10}>
                    <Input type="select" name="select" id="NA" onChange = {this.selectedTask} placeholder = "Select a">
                    <option>- Select a Task -</option>
                    <option>Edit team name</option>
                    <option>Edit team picture</option>
                    <option>Edit team score</option>
                    <option>Edit player name</option>
                    <option>Edit player social</option>
                    <option>Edit player picture</option>
                    </Input>
                  </Col>
                </FormGroup>
            <FormGroup row>
                  <Label for="exampleSelect" sm={2}>Region</Label>
                  <Col sm={10}>
                    <Input type="select" name="select" id="NA" onChange = {this.selectedRegion}>
                    <option>- Select a region -</option>
                    {this.state.regions.map((region) => {
                        return(
                            <option value={region}>{region}</option>
                        )
                    })}
                    </Input>
                  </Col>
                </FormGroup>
                <TeamList teams = {this.state.selectedRegionTeams} task = {this.state.task}/>
               <TeamForm task = {this.state.task}/>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Discord</Label>
                  <Col sm={10}>
                    <Input type="password" name="password" id="examplePassword" placeholder="Discord#---" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>Topic</Label>
                  <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>- Select a topic -</option>
                    <option>Roster change</option>
                    <option>Scheduling issue</option>
                    <option>Edit roster information</option>
                    <option>Edit team information</option>
                    <option>'other'</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>Explain your issue:</Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" />
                  </Col>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> "By submitting this form you hereby accept that your reasoning behind submitting this is pure and action can be taken if intentions are otherwise" 
                    but reworded
                  </Label>
                </FormGroup>
                <p className = "support-text">Please allow 24-48 hours for a response.</p>
        </Form>
    </div>
    )
}

render() {
    return (
    <div>
        {this.state.loaded ? this.content() : null}
    </div>
    )}
}

export default edit_team_form;
