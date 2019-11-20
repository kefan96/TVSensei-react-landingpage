import React, {Component} from 'react';
import './Testimonials.css';
import Header from './Header';
import Questions from './Questions';

class Testimonials extends Component {
    render(){
        return(
            <div className="testimonials">
                <Header />
                <Questions />
            </div>
        );
    }
}

export default Testimonials;