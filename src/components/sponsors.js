import React, { Component } from 'react'

class sponsors extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
                <div className = "sponsors">
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