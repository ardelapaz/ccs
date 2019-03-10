import React, { Component } from 'react';
import Schedule from './schedule/schedule'

class navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1,
            activeTab: "Home"
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(e,tab) {
        e.preventDefault();
        if (this.state.active !== tab) {
            switch(tab) {
                case(1):
                    this.setState({ activeTab : "Home"})
                    break;
                case(2):
                    this.setState({ activeTab : "Schedule"})
                    break;
                case(3):
                    this.setState({ activeTab : "Standings"})
                    break;
                case(4):
                    this.setState({ activeTab : "Profile"})
                    break;
                case(5):
                    this.setState({ activeTab : "My Team"})
                    break;
                case(6):
                    this.setState({ activeTab : "Support"})
                    break;
            }
          this.setState({
            active: tab
          });
        }
      }

    render() {
        return (
            <div className = "navigation-header">
            <nav className = "navigation">
                <div className = "navigation-container">
                    <ul className = "nav-links">
                        <li onClick = { (e) => this.toggle(e, 1)} className = {this.state.activeTab === "Home" ? 'nav-link-box-active' : 'nav-link-box'}><a  href= "/hub">Home</a></li>
                        <li onClick = { (e) => this.toggle(e, 2)} className = {this.state.activeTab === "Schedule" ? 'nav-link-box-active' : 'nav-link-box'}><a className = 'nav-link-header' href="/schedule">Schedule</a></li>
                        <li onClick = { (e) => this.toggle(e, 3)} className = {this.state.activeTab === "Standings" ? 'nav-link-box-active' : 'nav-link-box'}><a className = 'nav-link-header' href="/standings">Standings</a></li>

                        <img src='../../images/ccs2black.png' alt="ccs" className = "nav-logo" id = "nav-logo"/>
                        
                        <li onClick = { (e) => this.toggle(e, 4)} className = {this.state.activeTab === "Profile" ? 'nav-link-box-active' : 'nav-link-box'}><a className = 'nav-link-header' href="/profile">Profile</a></li>
                        <li onClick = { (e) => this.toggle(e, 5)} className = {this.state.activeTab === "My Team" ? 'nav-link-box-active' : 'nav-link-box'}><a className = 'nav-link-header' href="/user/team">My Team</a></li>
                        <li onClick = { (e) => this.toggle(e, 6)} className = {this.state.activeTab === "Support" ? 'nav-link-box-active' : 'nav-link-box'}><a className = 'nav-link-header' href="/support">Support</a></li>
                    </ul>
                </div>
            </nav>
            <Schedule />
            </div>
        )
    }
}

export default navigation;