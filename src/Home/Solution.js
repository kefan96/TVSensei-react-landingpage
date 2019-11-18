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
                    <p>At TVSensei, we create lessons that redefine the purpose of TV.</p>
                    <p>Our users don’t simply sit back and enjoy the show, they: </p>
                    <p>1. Do targeted listening and practice exercises with key vocabulary and phrases</p>
                    <p></p>
                    <p>2. Create, speak, and record dialogues as if they were the main character, and </p>
                    <p></p>
                    <p>3. Share in the target language about what they watched with watch buddies.</p>
                    <p></p>
                    <p>When you watch on TVSensei, you’re an active learner when it counts–completing exercises and more–and a
                    passive learner when it doesn’t. We guide you in how you view, so watching TV can have relaxing and engaging
                    moments–just like a well written show.</p>
                </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Solution;