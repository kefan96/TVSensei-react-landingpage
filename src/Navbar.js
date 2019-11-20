import React, {Component} from 'react';
import './Navbar.css';
import {
    Link
  } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm sticky-top" id="navbar">

            <div className="navbar-header">
                <a className="navbar-brand" id="title" href="/">TVSensei</a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/team">Team</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Career</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/testimonials">Testimonials</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>
        )
    }
}

export default Navbar;