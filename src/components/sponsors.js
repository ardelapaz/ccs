import React, { Component } from 'react'

class sponsors extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
                <div className = "sponsors">
                <h2 className = "sponsor-text">Support the people who support us!</h2>
                    <div className = "sponsors-box">
                        <img src = "../images/sponsors/mapban.png" alt = "Sponsors" className = "sponsors-image"/>
                        <img src = "../images/sponsors/siegegg.png" alt = "Sponsors" className = "sponsors-image"/>
                        <img src = "../images/sponsors/strafe.png" alt = "Sponsors" className = "sponsors-image"/>
                        <img src = "../images/sponsors/origin_gg.png" alt = "Sponsors" className = "sponsors-image"/>
                    </div>
                </div>
        )
    }
}
export default sponsors;