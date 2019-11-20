import React, {Component} from 'react';
import './Job.css';

class Job extends Component {
    render() {
        return(
            <div className="job">
                <i class="fas fa-code job-icon"></i><span className="job-title">Web Developer</span>
            </div>
        );
    }
}

export default Job;