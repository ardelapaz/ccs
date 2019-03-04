import React, { Component } from 'react';
import { Jumbotron, Container, Button, Nav, NavItem, NavLink, Row, Col, TabContent, TabPane } from 'reactstrap';
import Team from './team';
import classNames from 'classnames';

class TeamList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1'
        }
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render() {
        return (
            <div className = "standings-jumbo">
                <h1 className = "region-text">Select your region</h1>
                    <Nav tabs              
                        className = {classNames({ active: this.state.activeTab === '1'})}
                        onClick = {() => { this.toggle('1'); }}>
                        <NavItem>
                            <NavLink> 
                            </NavLink>
                        </NavItem>
                     </Nav>
                     <Nav tabs
                        className = {classNames({ active: this.state.activeTab === '2'})}
                        onClick = {() => { this.toggle('2'); }}>
                        <NavItem>
                            <NavLink> 
                            </NavLink>
                        </NavItem>
                     </Nav>
                        <TabContent activeTab = {this.state.activeTab}>
                            <TabPane tabId = "1">
                                <Row>
                                    <Col sm = "12">
                                                <a href = "/teams/name"><img src="../../images/teams/na/regime.png" alt = "Regime" className = "team-logo"/></a> 
                                                <a href = "/teams/name"><img src="../../images/teams/na/c9.png" alt = "Regime" className = "team-logo"/></a> 
                                                <a href = "/teams/name"><img src="../../images/teams/na/sin.png" alt = "Regime" className = "team-logo"/></a> 
                                                <a href = "/teams/name"><img src="../../images/teams/na/disrupt.png" alt = "Regime" className = "team-logo"/></a> 
                                                <a href = "/teams/name"><img src="../../images/teams/na/regime.png" alt = "Regime" className = "team-logo"/></a> 
                                                <a href = "/teams/name"><img src="../../images/teams/na/regime.png" alt = "Regime" className = "team-logo"/></a> 
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                        <TabContent activeTab = {this.state.activeTab}>
                            <TabPane tabId = "2">
                                <Row>
                                    <Col sm = "12">
                                        
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                </div>
        )
    }
}

export default TeamList;