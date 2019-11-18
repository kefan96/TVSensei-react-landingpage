import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="team">
                <section className="team-header">
                    <h1>Meet Our Team</h1>
                    <p>Each member of our team is a specialist in his or her field. Together, we make sure you’re investing where the best returns are, while building loyalty across every touchpoint.</p>
                </section>
            </div>
        );
    }
}

export default Header;