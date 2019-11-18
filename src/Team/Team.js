import React, {Component} from 'react';
import Header from './Header';
import People from './People';

class Team extends Component {
    render() {
        return(
            <div className="team">
                <Header />
                <People />
            </div>
        );
    }
}

export default Team;