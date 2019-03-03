import React, { Component } from 'react'

class social extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
                <ul className = "nav-social">
                    <li><a className = 'nav-link' href="/dashboard"><img src = "../images/social/twitch.png" className = "social-logos"/></a></li>
                    <li><a className = 'nav-link' href="/dashboard"><img src = "../images/social/twitter.png" className = "social-logos"/></a></li>
                    <li><a className = 'nav-link' href="/dashboard"><img src = "../images/social/instagram.png" className = "social-logos"/></a></li>
                    <li><a className = 'nav-link' href="/dashboard"><img src = "../images/social/youtube.png" className = "social-logos"/></a></li>
                </ul>
        )
    }
}
export default social;