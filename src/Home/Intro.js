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
                            <p>TVSensei is a platform that puts learners in the driver seat—delivering teacher-made language lessons with target language video content of the learner’s choice.</p>
                            <p>Scroll down to learn about our mission and product. At the bottom of the page you can sign up and find links to our social media to stay up to date on everything TVSensei and get inspired to learn as we await the big launch!</p>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-3">
                            <img class="sectionPic"
                            src="/cropped-TVSenseilogo.png"
                            alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;