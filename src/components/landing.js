import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'

class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null
        }
    }

    

    render() {
        return (
            <div className = "main-content">
                <div className = "main-page" id = "centered">
                <Jumbotron className = "main-jumbotron">
                    <img src="../images/ccs.png" alt = "CCS" className = "ccs-login"/>
                    <h1 className = "welcome-text">WELCOME,  <h1 className = "test">{this.state.name || "THE3RDWALKER"} </h1> </h1>
                    <p className="lead">Your next game is against Cloud9 on 12/21/12</p>
                    <hr className="my-2" />

                    <div className = "scroll-menu">
                        <img src="../images/teams/c9.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/regime.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/rise.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/c9.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/disrupt.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/regime.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/c9.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/rise.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/c9.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/regime.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/rise.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/c9.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/disrupt.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/regime.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/c9.png" alt = "C9" className = "ccs-login"/>
                        <img src="../images/teams/rise.png" alt = "C9" className = "ccs-login"/>
                    </div>
                    <img src="../images/teams/sin.png" alt = "C9" className = "my-team"/>
                    <p>Your team is currently 1st place, with a record of 10-2</p>
                    <p className="lead">
                    <Button color="primary" href = "">Manage Team</Button>
                    </p>
                </Jumbotron>
            
                </div>
            </div>
        )
    }
}

export default Landing;