import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Collapse, Button } from 'reactstrap'

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {collapse: false };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
render () {
    return (
        <div className = "schedule">
            <Button className = "schedule-button" onClick={this.toggle}>{this.state.collapse == false ? "VIEW SCHEDULE" : "HIDE SCHEDULE"}</Button>
                <div className = "tet">
                    <Collapse isOpen={this.state.collapse}>
                        <div className = "box-container">
                            <div className = "box">
                                <div className = "t-box">
                                    <img className = "teeet" src="../images/teams/na/c9.png"/>
                                    <h4>Vs</h4>
                                    <img className = "teeet" src="../images/teams/na/sin.png"/>
                                </div>
                                <div className = "b-box">
                                    <h2 className = "team1-s">2</h2>
                                    <br></br>
                                    <h2 className = "team1-s">2</h2>

                                </div>
                            </div>
                        <div className = "box">
                                <div className = "t-box">
                                    <img className = "teeet" src="../images/teams/na/c9.png"/>
                                    <h4>Vs</h4>
                                    <img className = "teeet" src="../images/teams/na/sin.png"/>
                                </div>
                                <div className = "b-box">
                                    <h2 className = "team1-s">2</h2>
                                    <br></br>
                                    <h2 className = "team1-s">2</h2>

                                </div>
                            </div>
                        <div className = "box">
                                <div className = "t-box">
                                    <img className = "teeet" src="../images/teams/na/c9.png"/>
                                    <h4>Vs</h4>
                                    <img className = "teeet" src="../images/teams/na/sin.png"/>
                                </div>
                                <div className = "b-box">
                                    <h2 className = "team1-s">2</h2>
                                    <br></br>
                                    <h2 className = "team1-s">2</h2>

                                </div>
                            </div>
                        <div className = "box">
                                <div className = "t-box">
                                    <img className = "teeet" src="../images/teams/na/c9.png"/>
                                    <h4>Vs</h4>
                                    <img className = "teeet" src="../images/teams/na/sin.png"/>
                                </div>
                                <div className = "b-box">
                                    <h2 className = "team1-s">2</h2>
                                    <br></br>
                                    <h2 className = "team1-s">2</h2>

                                </div>
                            </div>
                        <div className = "box">
                                <div className = "t-box">
                                    <img className = "teeet" src="../images/teams/na/c9.png"/>
                                    <h4>Vs</h4>
                                    <img className = "teeet" src="../images/teams/na/sin.png"/>
                                </div>
                                <div className = "b-box">
                                    <h2 className = "team1-s">2</h2>
                                    <br></br>
                                    <h2 className = "team1-s">2</h2>

                                </div>
                            </div>
                        </div>
                        </Collapse>
                    </div>
        </div>
        )
    }
}
export default Schedule;