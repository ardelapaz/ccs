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
import Schedule from './components/schedule/schedule';
import Footer from './components/footer';
import Support from './components/support';


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
              <Navigation />
          }
            // This needs to be it's own component eventually, named schedule
            
            />
            <Route exact path = "/dashboard" component = { Landing } />
            <Route exact path = "/user/team" component = { TeamPage } />
            <Route exact path = "/teams" component = { TeamList } />
            <Route exact path = "/login" component = { Login } />
            <Route exact path = "/standings" component = { Standings } />
            <Route exact path = "/user/support" component = { ManageTeam } />
            <Route exact path = "/hub" component = { Hub } />
            <Route exact path = "/support" component = { Support } />



       </main>
      
      <h2 className = "sponsor-text">Support the people who support us</h2>
      <Sponsors />
      <Footer />
      </div>
    );
  }
}

{ /* <div id ='vert-centered'> 
              { /* <Login /> */
              
             /* </div> */ }
export default App;
