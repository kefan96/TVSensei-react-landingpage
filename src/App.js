import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Intro from './Intro';
import Vission from './Vission';
import Mission from './Mission';
import Solution from './Solution';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="landing">
        <Navbar />
        <Header />
        <Intro />
        <Vission />
        <Mission />
        <Solution />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
