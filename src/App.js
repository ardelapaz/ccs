import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';
import Login from './components/login';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Team from './components/teams/team';
import Standings from './components/standings';
import TeamList from './components/teams/team_list';
import Hub from './components/hub';
import Social from './components/social';
import Sponsors from './components/sponsors';
import Schedule from './components/schedule/schedule';
import Footer from './components/footer';
import Support from './components/support';
import Checklist from './components/checklist';
import schedulePage from './components/schedule/schedulePage';
import Register from './components/register';
import {withRouter} from 'react-router-dom';


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
    let render;
    if (this.state.user != null) {
     render = 
     <div className="App">
       <main>
       <Navigation />
          <Route exact path = "/" component = { Hub } />
          <Route exact path = "/dashboard" component = { Dashboard } />
          <Route exact path = "/team" component = { Team } />
          <Route exact path = "/teams" component = { TeamList } />
          <Route exact path = "/login" component = { Login } />
          <Route exact path = "/standings" component = { Standings } />
          <Route exact path = "/support" component = { Support } />
          <Route exact path = "/schedule" component = { schedulePage } />
          <Route exact path = "/checklist" component = { Checklist } />
       </main>
      </div>
    } else {
        render = <Login />
    }
    return (
        <div>
          {render}
          <Footer />
        </div>
    );
  }
} 
export default App;