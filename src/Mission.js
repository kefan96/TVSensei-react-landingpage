import React, {Component} from 'react'
import './Mission.css'

class Mission extends Component {
    render(){
        return(
            <section className="mission">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-9 px-5">
                    <h3 className="pb-2">The Future of Foreign Language Learning</h3>
                    <p>TVSensei’s mission is to create a new means of learning a language in the most natural way.</p>
                    <p>We consider what users are already doing in their daily lives to come up with new routines that don’t feel
                    like more work. We’ve also considered what brings people together and come to understand that while language
                    skills are important, a shared cultural lexicon is what matters. We feel that learning with TV fulfills both.
                    </p>
                    <p>Some people look down on TV and label it as “braindead.” But at TVSensei we see TV as <em>creative</em>,
                    <em>inspiring</em>, and <em>engaging</em>.</p>
                    <p>We also see TV as being “in the world”–representing people across the globe.</p>
                    <p>Watching foreign language TV comes second in engagement with the target culture only to picking up and moving
                    to the language’s country of origin. </p>
                    <p>And even after you’ve moved, if you don’t watch TV, you’re not engaging in the target language’s popular
                    culture—arguably worse for communication than not speaking the language.</p>
                </div>
                <div className="col-3">
                    <img className="sectionPic"
                    src="https://images.unsplash.com/photo-1548973793-fb4376aa1a57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="devices" />
                </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Mission;