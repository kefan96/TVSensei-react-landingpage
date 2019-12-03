import React, {Component} from 'react'
import './Mission.css'

class Mission extends Component {
    render(){
        return(
            <section className="mission">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-9 px-5">
                    <h4>Why Video?</h4>
                    <p>Today, many learners turn to YouTube and other popular video streaming sites to pick up new skills in their free time. But how effective is it really to just watch a video?</p>
                    <p>Recently, new tools have been made to learn with video, but no tool provides guided viewing experiences crafted by teachers with the content you want to watch.</p>
                    <h4>Why Language?</h4>
                    <p>In developing this new learning method, language is the most natural place to begin.</p>
                    <p>Language is everywhere, and the situations we practice in school exist in hours of popular video content. Many learn language because they already enjoy this content, but it is completely ignored in formal education. Many learn language but have no connection to the culture. TVSensei allows these learners to nourish that connection by connecting their existing interests to target language media that excites them.</p>
                    <h4>Why TVSensei?</h4>
                    <p>Some people look down on TV and label it as “braindead.” But at TVSensei, we see TV as <em>creative</em>, <em>inspiring</em>, and most of all, <em>engaging</em>. We also see TV as being “in the world”—representing people across the globe. Watching TV comes second in engagement with the target culture only to picking up and moving to the language’s country of origin. If you don’t watch TV, you’re not engaging in the target language’s popular culture—a basis for expressing common interests.</p>
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