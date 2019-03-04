import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class footer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <footer className = "footer">
            <div className = "footer-boxes">
              <a href = "https://docs.wixstatic.com/ugd/07ea38_a663b4a4c80e40c3a9b727361edd0b37.pdf">
                <div className = "footer-content" id = "fc-bottom">
                  <img className = "rulebook" src = './images/rulebook.png'/>
                  <h3 className = "footer-text" id = "small">RULEBOOK</h3>
                </div>
              </a>
              <a href = "/checklist">
                <div className = "footer-content" id = "fc-bottom">
                  <img className = "checklist" src = './images/checklist.png'/>
                  <h3 className = "footer-text" id = "small">GAME DAY CHECKLIST</h3>
                </div>
              </a>
            </div>
            <div className = "footer-boxes" id = "fb-right">
                <div className = "footer-content">
                    <img className = "footer-image-right" src = './images/ccs2black.png'/>
                    <h2 className = "footer-text">Connect with us!</h2>
                </div>
                <div className = "footer-content" id = "fc-right">
                    <a href = "https://discordapp.com/invite/ccs"><img className = "footer-image-discord" src = './images/social/discord.png'/></a>
                    <a href = "https://www.twitch.tv/ccsesports"><img className = "footer-image-twitch" src = './images/social/twitch.png'/></a>
                    <a href = "https://twitter.com/CCSesports"><img className = "footer-image-twitter" src = './images/social/twitter.png'/></a>
                    <a href = "https://www.youtube.com/ccsesports"><img className = "footer-image-youtube" src = './images/social/youtube.png'/></a>
                </div>
            </div>
        </footer>
        )
    }
}
export default footer;