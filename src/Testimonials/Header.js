import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <section className="testimonials-header">
                <h1 className="header-title">Testimonials</h1>
                <p className="header-subtitle">Help us help you</p>
            </section>
        );
    }
}

export default Header;