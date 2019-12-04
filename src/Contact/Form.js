import React, {Component} from 'react';
import './Form.css';
import emailjs from 'emailjs-com';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phone: '', message: '' };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    handleSubmit (event) {
        event.preventDefault();
        const templateId = 'template_gtJR9CsO';
        const serviceId = 'default_service';
        const userId = 'user_yST0r1jTqkAg5bK8MGvpP';
        this.sendFeedback(
                            serviceId, 
                            templateId, 
                            {
                                message_html: this.state.message, 
                                from_name: this.state.name, 
                                reply_to: this.state.email, 
                                phone_num: this.state.phone
                            }, 
                            userId
                        )
    }

    sendFeedback (serviceId, templateId, variables, userId) {
        emailjs.send(
            serviceId,
            templateId,
            variables,
            userId
          ).then(res => {
            alert('Email successfully sent!');
            window.location.reload(false);
          }).catch(err => {
              alert('Oh well, you failed. Here some thoughts on the error that occured:', err);
            });
      }

    render() {
        return(
            <section className="contact-form-section">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label> Full Name: <span className="required">*</span></label>
                                <input type="text" className="form-control mb-1" id="name" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder="First Last" require />
                                <label>Email Address: <span className="required">*</span></label>
                                <input type="email" className="form-control mb-1" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="name@example.com" require />
                                <label>Phone Number:</label>
                                <input type="tel" className="form-control mb-1" id="phone" name="phone" value={this.state.phone} onChange={this.handlePhoneChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="Format: 123-456-7890" />
                                <label>Message: <span className="required">*</span></label>
                                <textarea name="message" id="message" cols="30" rows="8" class="form-control"
                                placeholder="TVSensei is awesome!!!" value={this.state.message} onChange={this.handleMessageChange}></textarea>
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