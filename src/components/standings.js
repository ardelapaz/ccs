import React, {Component} from 'react';
import { Jumbotron, Table, Nav, NavLink, NavItem, TabContent, TabPane, Row, Col } from 'reactstrap';
import classNames from 'classnames';

class standings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teamName: ["../images/teams/na/c9.png", "../images/teams/na/disrupt.png", "../images/teams/na/regime.png", "../images/teams/eu/g2.png", "../images/teams/na/sin.png", "../images/teams/na/c9.png", "../images/teams/na/disrupt.png", "../images/teams/na/regime.png", "../images/teams/eu/g2.png", "../images/teams/na/sin.png"],
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
                                        <Table>
                                             <thead>
                                               <tr>
                                                 <th>NA Place</th>
                                                 <th>NA Team</th>
                                                 <th></th>
                                                 <th>NA Points</th>
                                                 <th>NA Points Behind</th>
                                               </tr>
                                             </thead>
                                             <tbody>
                                             {this.state.teamName.map((name, standing) => {
                                                var standing = standing+ 1;
                                                return (
                                                    <tr>
                                                        <th scope = "row">{standing}</th>
                                                        <td>
                                                            <img src={name} alt = "Regime" className = "standing-logo"/>
                                                        </td>
                                                        <td>NA Team Name</td>
                                                        <td>NA Points here</td>
                                                        <td>NA Points Behind here</td>
                                                    </tr>
                                                )}
                                                )}
                                             </tbody>
                                        </Table>
                            </TabPane>
                        </TabContent>
                        <TabContent activeTab = {this.state.activeTab}>
                            <TabPane tabId = "2">
                                <Row>
                                    <Col sm = "12">
                                        <Table>
                                             <thead>
                                               <tr>
                                                 <th>EU Place</th>
                                                 <th>EU Team</th>
                                                 <th> </th>
                                                 <th>EU Points</th>
                                                 <th>EU Points Behind</th>
                                               </tr>
                                             </thead>
                                             <tbody>
                                             {this.state.teamName.map((name, standing) => {
                                                var standing = standing+ 1;
                                                return (
                                                    <tr>
                                                        <th scope = "row">{standing}</th>
                                                        <td>
                                                            <img src={name} alt = "Regime" className = "standing-logo"/>
                                                        </td>
                                                        <td>EU Team Name</td>
                                                        <td>EU Points here</td>
                                                        <td>EU Points Behind here</td>
                                                    </tr>
                                                )}
                                                )}
                                             </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                </div>
        )
    }
}

export default standings;