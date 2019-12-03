import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="team">
                <section className="team-header">
                    <h1>Meet Our Team</h1>
                    <p>We’re a small team of dreamers each dedicated to the pursuit of making language learning entertaining. Scroll down to meet the co-founders!</p>
                </section>
            </div>
        );
    }
}

export default Header;