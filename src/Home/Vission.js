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
                    <p>TVSensei is driven by the question, <em>“What makes an effective virtual lesson?”</em></p>
                    <p>Our mission is to balance learners’ desire for personalized content and classroom learning. We strive to make any content educational through guided viewing and group exercises.</p>
                    <p>At TVSensei we value educational experiences that are <strong>accessible</strong>, <strong>entertaining</strong>, and <strong>effective</strong>.</p>
                    <p>An <strong>accessible</strong> lesson is not only available regardless of age or money, it is a lesson anyone can learn from. It is easy to do because it’s <strong>enjoyable</strong> and is worth one’s time because it connects you to new opportunities to <strong>apply the subject you study</strong>.</p>
                </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Vission;