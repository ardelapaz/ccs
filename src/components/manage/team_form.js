import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, FormLabel } from 'reactstrap';
import TeamList from '../manage/team_list';
import * as firebase from 'firebase';

class TeamForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [],
            teamName: '',
            readOnly: '',
            submitted: false,
            newTeamKey: '',
            selectedTeam: 'Select a team', 
            teamImage: '',
            players: [],
            selectedTeamKey: ''
        }
        this.teamsRef = firebase.database().ref('teams');
        this.teams = firebase.database().ref();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.selectedTeam = this.selectedTeam.bind(this);
        this.storage = firebase.storage().ref();

    }

    // componentDidMount() {
    //     if(this.state.submitted === true) {
    //         this.newTeamRef = firebase.database.ref('teams/' + this.state.newTeamKey);
    //     }
    //     if (this.state.submitted === false) {
    //         this.teamsRef.on('child_added', snapshot => {
    //             this.setState({newTeamKey: snapshot.key });
    //         });
    //     }
    //     if(this.newTeamRef) {
    //         this.newTeamRef.on('child_added', snapshot => {
    //             const newPlayer = snapshot.val();
    //             this.setState({ players: this.state.players.concat(newPlayer) });
    //         });
    //     }
    //     this.teamsRef.on('child_added', snapshot => {
    //         const team = snapshot.val();
    //         team.key = snapshot.key;
    //         this.setState({ teams: this.state.teams.concat (team) });
    //     });
    // }

    handleChange(e) {
        const value = e.target.value;
        const id = e.target.id;
        const type = e.target.type;
        console.log(id);

        if (type == 'file') {
            var selectedFile = document.getElementById("file").files[0];
                var fileName = selectedFile.name;
                this.setState({ image: fileName });
                this.storageRef = firebase.storage().ref(fileName);
        } else {
            this.setState({ teamName: value });
        }    
    }
    getValidationState() {
        const length = this.state.teamName.length;
        if (length > 5) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.submitted == false) {
            var selectedFile = document.getElementById("file").files[0];
            const that = this;
            this.storageRef.put(selectedFile).then((snapshot) => {
                console.log('Uploaded a file!');
                that.storage.child(snapshot.metadata.name).getDownloadURL().then((url) => {
                    that.createTeam(url);
                });
            });
            this.setState({ readOnly: 'readOnly', submitted: true });
        } else {
            this.teamsRef.child(this.state.newTeamKey).update({ teamName: this.state.teamName });
            this.setState({ readOnly: 'readOnly' });
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState({ readOnly: '' });
    }

    selectedTeam(e) {
        const that = this;
        this.state.teams.map((team) => {
            if(team.teamName === e.target.value) {
                 that.setState({ selectedTeamKey: team.key });
                 that.newKey = team.key;
                 console.log(team.key);
            }
        });
        this.setState({ selectedTeam: e.target.value });
        if (e.target.value === "other") {
        }
    }

    createTeam(url) {
        this.teamsRef.push({
            teamName: this.state.teamName,
            teamImage: url
        });
        this.setState({ teamImage: '' });
    }



    render() {
        let solution;
        switch(this.props.task) {
            case "Edit team name":
                solution =  
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>{this.props.task}</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" id="exampleText" placeholder="New team name" />
                    </Col>
              </FormGroup>
            case "Edit team picture":
                    solution =  
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>{this.props.task}</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="exampleText" placeholder="New team picture" />
                        </Col>
                  </FormGroup>
            case "Edit team score":
                    solution =  
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>{this.props.task}</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="exampleText" placeholder="New team score" />
                        </Col>
                  </FormGroup>
            case "Edit player name":
                    solution =  
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>{this.props.task}</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="exampleText" placeholder="New player name" />
                        </Col>
                  </FormGroup>
            case "Edit player social":
                    solution =  
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>{this.props.task}</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="exampleText" placeholder="New player social" />
                        </Col>
                  </FormGroup>
            case "Edit player picture":
                    solution =  
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>{this.props.task}</Label>
                        <Col sm={10}>
                            <Input type="text" name="text" id="exampleText" placeholder="New player picture" />
                        </Col>
                  </FormGroup>
        }
        
            return (
                <div>
                        {solution}
                        {/* <PlayerList players = {this.state.players}/> */}
                </div>
            )
        }
        }
               
export default TeamForm;