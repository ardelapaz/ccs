import React, { Component } from 'react';
import Schedule from './schedule/schedule'

class navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(e,tab) {
        console.log(e.value);
        if (this.state.active !== tab) {
            switch(tab) {
                case(1):
                this.setState({ activeTab : ""})
                break;
                case(2):
                this.setState({ activeTab : ""})
                break;
                case(3):
                this.setState({ activeTab : ""})
                break;
                case(4):
                this.setState({ activeTab : ""})
                break;
                case(5):
                this.setState({ activeTab : ""})
                break;
                case(6):
                this.setState({ activeTab : ""})
                break;
                case(7):
                this.setState({ activeTab : ""})
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
                        <li onClick = { (e) => this.toggle(e, 1)}><a classNames = {'nav-link-header'} href= "/hub">Home</a></li>
                        <li onClick = { (e) => this.toggle(e, 3)}><a className = 'nav-link-header' href="/schedule">Schedule</a></li>
                        <li onClick = { (e) => this.toggle(e, 4)}><a className = 'nav-link-header' href="/standings">Standings</a></li>

                        <img src='../../images/ccs2black.png' alt="ccs" className = "nav-logo" id = "nav-logo"/>
                        
                        <li onClick = { (e) => this.toggle(e, 5)}><a className = 'nav-link-header' href="/profile">Profile</a></li>
                        <li onClick = { (e) => this.toggle(e, 6)}><a className = 'nav-link-header' href="/user/team">My Team</a></li>
                        <li onClick = { (e) => this.toggle(e, 7)}><a className = 'nav-link-header' href="/support">Support</a></li>
                    </ul>
                </div>
            </nav>
            <Schedule />
            </div>
        )
    }
}

export default navigation;