import React, {Component} from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
        return(
            <section class="intro">
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <h3 class="pb-2">Learn language in a New Way</h3>
                            <p>Hi! We’re TVSensei (<em>tee-vee-sen-say-ee</em>).</p>
                            <p>We’re out to <strong>revolutionize</strong> language learning as we know it!</p>
                            <p>TVSensei teaches users to speak foreign languages in the context seen on screen—engaging learners with
                            popular TV shows as both audience and actor using <strong>lessons designed by us</strong>.</p>
                            <p>Scroll down to learn about our mission and our product. And if you're interested, <a href="/">Contact Us</a> to
                            see our wonderful contents!</p>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-3">
                            <img class="sectionPic"
                            src="https://i1.wp.com/tvsensei.com/wp-content/uploads/2019/05/cropped-TVSenseilogo-1.png?fit=260%2C250&ssl=1"
                            alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;