import React, {Component} from 'react';
import './JobList.css';
import Job from './Job';

class JobList extends Component {
    render() {
        return(
            <section className="job-list">
                <div className="job-container">
                    <div className="job-card">
                        <Job title="Web Development" />
                    </div>
                    <div className="job-card">
                        <Job title="ELL Lesson Development" />
                    </div>
                    <div className="job-card">
                        <Job title="Outreach Management" />
                    </div>
                </div>
                <div className="job-list-text text-center">
                    <h2>Interested?</h2>
                    <p>Find more information <a href="https://docs.google.com/document/d/1Nh-1ynwkJq7XSE37Vn6wNAk1AV1PbhOD4bkIlsd7pJY/edit">here</a> <br />Or send your resume to <email>henry@tvsensei.com</email></p>
                </div>
            </section>
        );
    }
}

export default JobList;