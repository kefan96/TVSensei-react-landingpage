import './App.css';
import React, {Component} from 'react';
import Navbar from './Navbar';
import Home from './Home/Home';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
