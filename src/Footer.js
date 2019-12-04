import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="row">
                    <div className="col-md-6">
                        <p>All rights reserved.</p>
                        <p>TVSensei<br />474 48th Ave. Apt 27c<br />Long Island City, NY 11109</p>
                        <ul>
                            <li><a href="https://www.facebook.com/learnwithtvsensei/"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/tvsensei?trk=companies_directory"><i
                                className="fab fa-linkedin fa-2x"></i></a></li>
                            <li><a href="https://www.instagram.com/tvsenseiofficial/?hl=en"><i className="fab fa-instagram fa-2x"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <p>TVSensei is a member of StartEd, the NYU Steinhardt Edtech Incubator.</p>
                        <img src="https://i0.wp.com/tvsensei.com/wp-content/uploads/2019/05/Incubator_White_W_StartEd.png?zoom=1.5&resize=300%2C132&ssl=1" alt="NYU" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;