import React, {Component} from 'react';
import Header from './Header';
import JobList from './JobList';


class Career extends Component {
    render() {
        return(
            <div className="career">
                <Header />
                <JobList />
            </div>
        );
    }
}

export default Career;