import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <section className="career-header">
                <h1 className="career-header-title">Join Us</h1>
                <p className="career-header-subtitle">We are looking for talents like you</p>
            </section>
        );
    }
}

export default Header;