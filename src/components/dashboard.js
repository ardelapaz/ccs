    
import React, {Component}from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import EditTeam from './manage/edit_team_form';
import TeamForm from './manage/team_form';
import classNames from 'classnames';


class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
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
          <div>
              <EditTeam />
              <TeamForm />
          </div>
        );
      }
    }
//     render() {
//         return (
//             <div className = "dashboard">
//                 <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
//                  <Tab eventKey={1} title="Create a new news post">
//                  {/* <Create/> */}
//                  <h1>Coming Soon</h1>
//                 </Tab>
//                  <Tab eventKey={2} title="Create a new team">
//                  <h1>Coming Soon</h1>
//                 </Tab>
//                 <Tab eventKey={3} title="Edit an existing team">
//                 <h1>Coming Soon</h1>
//                  {/* <EditTeam/> */}
//                 </Tab>
//                 </Tabs>;
//             </div>
//         )
//     }
// }

export default Dashboard;