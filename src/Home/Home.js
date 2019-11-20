import React, {Component} from 'react';
import Header from './Header';
import Intro from './Intro';
import Vission from './Vission';
import Mission from './Mission';
import Solution from './Solution';
import Contact from './Contact';
import './Home.css';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Header />
                <Intro />
                <Vission />
                <Mission />
                <Solution />
                <Contact />
            </div>
        );
    }
}

export default Home;