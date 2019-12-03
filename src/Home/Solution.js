import React, {Component} from 'react';
import './Solution.css';

class Solution extends Component {
    render(){
        return(
            <section className="content">
            <div className="solution">
                <div className="row align-items-center">
                <div className="col-4" id="solution">
                    <img
                    src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="" className="sectionPic" />
                </div>
                <div className="col-8 float-right px-5">
                    <h3 className="pb-2">Our Solution</h3>
                    <p>At TVSensei, we facilitate the creation of lessons by qualified instructors that redefine the purpose of TV.</p>
                    <p>People learning on TVSensei don’t simply sit back and enjoy the show, they:</p>
                    <ol>
                        <li>Do targeted listening and practice exercises with key vocabulary and phrases</li>
                        <li>Are guided through discussion between instructor and fellow learners to practice and perform using the target language based on the scenarios in the video</li>
                        <li>Complete review exercises independently to reinforce what they learn in each lesson.</li>
                    </ol>
                    <p>In short, when you watch on TVSensei, you’re an active learner when it counts–completing exercises and more–and a passive learner when it doesn’t. We guide you in how you view, so watching TV can have relaxing and engaging moments–just like a well written show.</p>
                </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Solution;