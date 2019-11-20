import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <section className="contact-header">
                <h1 className="header-title">Contact Us</h1>
                <p className="header-subtitle">Want a demo? Looking for information? Send us a message!</p>
            </section>
        );
    }
}

export default Header;