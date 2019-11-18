import React, {Component} from 'react';
import './Vission.css';

class Vission extends Component{
    render(){
        return(
            <section className="vission">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-5">
                    <img className="sectionPic" src="/brain.jpg" alt="brain" />
                </div>
                <div className="col-7 float-right">
                    <h3 className="pb-2">OUR RAISON D’ÊTRE (WHY WE EXIST)</h3>
                    <p>Right now we have two main options for learning a language:</p>
                    <p>1. Take a class</p>
                    <p></p>
                    <p>2. Use a program like Rosetta Stone, Duolingo, or Babbel</p>
                    <p>Option 1 works… if you have the time and money. You’ll interact with your teacher and other students in the
                    target language and build your fluency.</p>
                    <p>Option 2 works… if you’re diligent and consistently practice for 10 minutes or more a day until the end of
                    time. </p>
                    <p>The reality is that like most new tech, “gamified” learning is only fun while it’s new. Once you’ve done your
                    hundredth round of “tap the words to create the sentence,” the game has lost its charm.</p>
                    <p>What is missing from both options is this: real world content that’s both <strong>entertaining</strong> and
                    <strong>educational</strong> that will drive you to engage with the target language every day. And we’re
                    talking about a big one: foreign television. </p>
                </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Vission;