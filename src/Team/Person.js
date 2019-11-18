import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
    render(){
        const {img} = this.props;
        const {intro} = this.props;
        const {title} = this.props;
        const {name} = this.props;
        return(
            <div className="person">
                <div className="person-img">
                    <img src={img} alt="profile" width="300px" height="300px"/>
                </div>
                <hr />
                <div className="person-intro">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                    <p>{intro}</p>
                </div>
            </div>
        );
    }
}

export default Person;