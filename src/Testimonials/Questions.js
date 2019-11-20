import React, {Component} from 'react';
import "./Questions.css";

class Questions extends Component {
    render() {
        return(
            <section className="questions">
                <div className="row">
                    <div className="col-md-6">
                        <h3>We want to know:</h3>
                        <p>How have you used TV in your own life to practice a foreign language?</p>
                        <p>Submit your answer below and spark joy as we tailor our product to reflect your viewing and learning experiences.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Your Story</h3>
                        <p>How have you used TV to study a foreign language?</p>
                        <form>
                            <div className="form-group">
                                <label for="name">Name <span className="required">*</span></label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="First Last" required />
                            </div>
                            <div className="form-group">
                                <label for="">Email <span className="required">*</span></label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="email@gmail.com" required/>
                                <small>Please enter your email, so we can follow up with you</small>
                            </div>
                            <div className="form-group">
                                <label for="what">What did you whatch? <span className="required">*</span></label>
                                <input type="text" className="form-control" id="what" name="what" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label for="language">What language did you watch in? <span className="required">*</span></label>
                                <input type="text" className="form-control" id="language" name="language" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label for="story">Your story learning the language <span className="required">*</span></label>
                                <textarea className="form-control" id="story" name="story" placeholder="" required rows="5" />
                            </div>
                            <div className="form-group">
                                <div class="form-check">
                                    <input type="checkbox" className="form-check-input" id="agree" name="agree" />
                                    <label for="agree" className="form-check-label">I approve TVSensei to share my story on social platforms</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="instagram">Instagram account (so we can tag you)</label>
                                <input type="text" className="form-control" id="instrgram" name="instagram" placeholder="" />
                            </div>
                            <input type="submit" className="btn" value="Submit" />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Questions;