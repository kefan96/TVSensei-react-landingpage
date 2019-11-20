import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <section className="testimonials-header">
                <h1 className="header-title">Testimonials</h1>
                <p className="header-subtitle">Be our guests, and make our service better</p>
            </section>
        );
    }
}

export default Header;