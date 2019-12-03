import React, {Component} from 'react';
import './Job.css';

class Job extends Component {
    render() {
        const {title} = this.props;
        let icon="";
        if (title === "Web Development") {
            icon = "fas fa-code job-icon";
        } else if (title === "ELL Lesson Development") {
            icon = "fas fa-glasses job-icon";
        } else if (title === "Outreach Management") {
            icon = "fas fa-search-dollar job-icon";
        }


        return(
            <div className="job">
                <i class={icon}></i><span className="job-title">{title}</span>
            </div>
        );
    }
}

export default Job;