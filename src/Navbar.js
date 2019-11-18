import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm sticky-top" id="navbar">

            <div className="navbar-header">
                <a className="navbar-brand" id="title" href="/">TVSensei</a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Career</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact Us</a>
                </li>
            </ul>
            </nav>
        )
    }
}

export default Navbar;