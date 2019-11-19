import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer class="d-flex justify-content-center align-items-center">
            <p>TVSensei. All rights reserved.</p>
            <ul>
                <li><a href="https://www.facebook.com/learnwithtvsensei/"><i class="fab fa-facebook-square fa-2x"></i></a></li>
                <li><a href="https://www.linkedin.com/company/tvsensei?trk=companies_directory"><i
                    class="fab fa-linkedin fa-2x"></i></a></li>
                <li><a href="https://www.instagram.com/tvsenseiofficial/?hl=en"><i class="fab fa-instagram fa-2x"></i></a></li>
            </ul>
            </footer>
        );
    }
}

export default Footer;