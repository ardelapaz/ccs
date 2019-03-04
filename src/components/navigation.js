import React, { Component } from 'react';
import Schedule from './schedule/schedule'

class navigation extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        return (
            <div className = "navigation-header">
            <nav className = "navigation">
                <div className = "navigation-container">
                    <img src='../../images/ccs2black.png' alt="ccs" className = "nav-logo" id = "nav-logo"/>
                    <ul className = "nav-links">
                        <li><a className = 'nav-link-header' href="/hub">Home</a></li>
                        <li><a className = 'nav-link-header' href="/user/team">My Team</a></li>
                        <li><a className = 'nav-link-header' href="/schedule">Schedule</a></li>
                        <li><a className = 'nav-link-header' href="/standings">Standings</a></li>
                        <li><a className = 'nav-link-header' href="/support">Support</a></li>
                        <li><a className = 'nav-link-header' href="/profile">Profile</a></li>
                        <li><a className = 'nav-link-header' href="/teams">Teams</a></li>
                    </ul>
                </div>
            </nav>
            <Schedule />
            </div>
        )
    }
}

export default navigation;