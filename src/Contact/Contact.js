import React, {Component} from 'react';
import Header from './Header';
import Form from './Form';

class Contact extends Component {
    render() {
        return(
            <div className="contact-page">
                <Header />
                <Form />
            </div>
        );
    }
}

export default Contact;