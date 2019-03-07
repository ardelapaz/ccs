import React, { Component } from 'react'

class sponsors extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
                <div className = "sponsors">
                    <img src = "../images/sponsors/mapban.png" alt = "Sponsors" className = "sponsors-image"/>
                    <img src = "../images/sponsors/siegeGG.png" alt = "Sponsors" className = "sponsors-image"/>
                    <img src = "../images/sponsors/strafe.png" alt = "Sponsors" className = "sponsors-image"/>
                    <img src = "../images/sponsors/origin_gg.png" alt = "Sponsors" className = "sponsors-image"/>
                </div>
        )
    }
}
export default sponsors;