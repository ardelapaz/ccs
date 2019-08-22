import React, { Component } from 'react';

class navigation extends Component {
    render() {
        return (
            <div className = "navigation-header">
                <div className = "nav-box">
                    <a href = "/" className = "main-image">
                        <img src='../../images/ccs.png' href = "/" alt="ccs" className = "nav-logo" id = "nav-logo"/>
                    </a>
                    <ul className = "nav-links">
                        <li className = 'nav-link-box'><a className = 'nav-link-header' href="/schedule">Schedule</a></li>
                        <li className = 'nav-link-box'><a className = 'nav-link-header' href="/standings">Standings</a></li>
                        <li className = 'nav-link-box'><a className = 'nav-link-header' href="/team">My Team</a></li>
                        <li className = 'nav-link-box'><a className = 'nav-link-header' href="/support">Support</a></li>
                    </ul> 
                </div>
            </div>   
        )
    }
}

export default navigation;