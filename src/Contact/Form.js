import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return(
            <section className="contact-form-section">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <form action="#">
                            <div className="form-group">
                                <label for="name">Full Name: <span className="required">*</span></label>
                                <input type="text" className="form-control mb-1" id="name" placeholder="First Last" require />
                                <label for="email">Email Address: <span className="required">*</span></label>
                                <input type="email" className="form-control mb-1" id="email" placeholder="name@example.com" require />
                                <label for="phone">Phone Number:</label>
                                <input type="tel" className="form-control mb-1" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="Format: 123-456-7890" />
                                <label for="message">Message: <span className="required">*</span></label>
                                <textarea name="message" id="message" cols="30" rows="8" class="form-control"
                                placeholder="TVSensei is awesome!!!"></textarea>
                                <button className="btn my-2">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;