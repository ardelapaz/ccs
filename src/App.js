import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';
import Login from './components/login';
import Navigation from './components/navigation';
import Landing from './components/landing';
import TeamPage from './components/teams/team_page';
import ManageTeam from './components/teams/manage_team';
import Standings from './components/standings';
import TeamList from './components/teams/team_list';
import Hub from './components/hub';
import Social from './components/social';
import Sponsors from './components/sponsors';


var config = {
  apiKey: "AIzaSyDt-D-mmPlOKMMyOQVDj0rBKG9MjvDEfxg",
  authDomain: "ccs-r6.firebaseapp.com",
  databaseURL: "https://ccs-r6.firebaseio.com",
  projectId: "ccs-r6",
  storageBucket: "ccs-r6.appspot.com",
  messagingSenderId: "334970809062"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  componentWillUnmount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user)
      if (user) {
        this.setState({ user: user })
      } else {
        this.setState({ user: null })
      }
      }.bind(this));
  }

  render() {
    return (

      <div className="App">
       <main>
          <Route path = "/" render={props => 
            <div className = "nav-bar">
              <Navigation />
            </div>
            }
            />
            <Route exact path = "/dashboard" component = { Landing } />
            <Route exact path = "/user/team" component = { TeamPage } />
            <Route exact path = "/teams" component = { TeamList } />
            <Route exact path = "/login" component = { Login } />
            <Route exact path = "/standings" component = { Standings } />
            <Route exact path = "/user/support" component = { ManageTeam } />
            <Route exact path = "/hub" component = { Hub } />
            <Route exact path = "/support" component = { Sponsors } />



       </main>
       <Sponsors />
        <footer className = "footer">
            <div className = "footer-boxes">
              <div className = "footer-content" id = "fc-bottom">
                <div className = "content-box">
                  <img className = "rulebook" src = './images/rulebook.png'/>
                  <h3 className = "footer-text" id = "s">RULEBOOK</h3>
                </div>
                <div className = "content-box">
                  <img className = "checklist" src = './images/checklist.png'/>
                  <h3 className = "footer-text" id = "s">GAME DAY CHECKLIST</h3>
                </div>
              </div>
            </div>
            <div className = "footer-boxes" id = "fb-right">
              <div className = "content-holder">
                <div className = "footer-content" id = "f-top">
                  <div className = "tet">
                    <img className = "footer-image-right" src = './images/ccs2black.png'/>
                    <h2 className = "footer-text">Connect with us!</h2>
                  </div>
                </div>
                <div className = "footer-content">
                  <div className = "content-box" id = "cb-right">
                    <img className = "footer-image-discord" src = './images/social/discord.png'/>
                    <img className = "footer-image-twitch" src = './images/social/twitch.png'/>
                    <img className = "footer-image-twitter" src = './images/social/twitter.png'/>
                    <img className = "footer-image-youtube" src = './images/social/youtube.png'/>
                  </div>
                </div>
                </div>
              <div className = "footer-content">
              </div>
            </div>
        </footer>
      </div>
    );
  }
}

{ /* <div id ='vert-centered'> 
              { /* <Login /> */
              
             /* </div> */ }
export default App;
