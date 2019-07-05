import React, { Component } from 'react';
import { Button, Card, CardImg, CardTitle, Jumbotron } from 'reactstrap';

class Team extends Component {
constructor(props) {
    super(props)
    this.state = {
        name: null,
        logo: null,
        record: null
    }
}

getteaminfo() {

}

render() {
    return (
            <Jumbotron className = "page-jumbo">
                <div className = "team-info">
                    <div className = "picture-record">
                        <img src="../../images/teams/na/regime.png" alt = "Regime" className = "team-logo"/>
                        <h2 className="record">7-4</h2>
                    </div>
                    <div className = "players-box">
                        <h1 className = "team-name">REGIME</h1>
                        <div className = "player-cards">
                            <Card className = "card">
                                <CardImg top width="100%" src="../../images/players/player.png" alt="Player1" />
                                <CardTitle className = "player-name">Player1</CardTitle>
                            </Card>
                            <Card className = "card">
                                <CardImg top width="100%" src="../../images/players/player.png" alt="Player1" />
                                <CardTitle className = "player-name">Player1</CardTitle>
                            </Card>
                            <Card className = "card">
                                <CardImg top width="100%" src="../../images/players/player.png" alt="Player1" />
                                <CardTitle className = "player-name">Player1</CardTitle>
                            </Card>
                            <Card className = "card">
                                <CardImg top width="100%" src="../../images/players/player.png" alt="Player1" />
                                <CardTitle className = "player-name">Player1</CardTitle>
                            </Card>
                            <Card className = "card">
                                <CardImg top width="100%" src="../../images/players/player.png" alt="Player1" />
                                <CardTitle className = "player-name">Player1</CardTitle>
                            </Card>
                        </div>
                        <Button className = "btn btn-danger" href = "/user/support">Edit Team</Button>
                    </div>
                </div>
                </Jumbotron>
    )
}

}

export default Team;