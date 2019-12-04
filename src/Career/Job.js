import React, {Component} from 'react';
import './Job.css';

class Job extends Component {
    render() {
        const {id, title, location, description, duties, ideal, benefit, apply, footer} = this.props;

        let icon="";
        if (title === "Web Development") {
            icon = "fas fa-code job-icon";
        } else if (title === "ELL Lesson Development") {
            icon = "fas fa-glasses job-icon";
        } else if (title === "Outreach Management") {
            icon = "fas fa-search-dollar job-icon";
        }

        let modal_id= "positionModal-" + id;
        let data_target = "#" + modal_id;

        return(
            <>
                <div className="job" data-toggle="modal" data-target={data_target}>
                    <i className={icon}></i><span className="job-title">{title}</span>
                </div>
                <div className="modal fade" id={modal_id} tabIndex="-1" role="dialog" aria-labelledby="positionModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"><i className={icon}></i>{title}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Location: </h5>
                            <p>{location}</p>
                            <h5>Description:</h5>
                            <p>{description}</p>
                            <h5>Duties:</h5>
                            <ul>{duties.map((duty, index) => (
                                <li key={index}>{duty}</li>
                            ))}</ul>
                            <h5>Ideal Candidates:</h5>
                            <p>{ideal}</p>
                            <h5>What's in it for you?</h5>
                            <p>{benefit}</p>
                            <h5>How to apply?</h5>
                            <p>{apply}</p>
                            <p>{footer}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Job;