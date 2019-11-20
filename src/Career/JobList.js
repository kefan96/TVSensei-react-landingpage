import React, {Component} from 'react';
import './JobList.css';
import Job from './Job';

class JobList extends Component {
    render() {
        return(
            <section className="job-list">
                <div className="row">
                <Job className="col-md-4"/>
                </div>
            </section>
        );
    }
}

export default JobList;