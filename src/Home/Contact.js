import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render(){
        return(
            <section className="contact">
            <div className="container">
                <h3>Contact Us</h3>
                <p>Need more information? Leave us a message!</p>
                <a href="/contact" className='btn' >To Contact Page</a>
            </div>
            </section>
        );
    }
}

export default Contact;