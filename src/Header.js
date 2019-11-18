import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="cover"></div>
                <video className="background" autoplay="autoplay" loop="loop" muted="muted">
                    <source src="/Slow Motion Video Of People.mp4" type="video/mp4" />
                </video>
                <section id="landing-header">
                    <h1>Welcome to TVSensei!</h1>
                    <ul>
                        <li id="slogan-en">Language learning, now entertaining</li>
                        <li id="slogan-jp">言語学習、今面白い</li>
                        <li id="slogan-zh">语言学习，现在变得有趣</li>
                        <li id="slogan-pg">Aprendizado de idiomas, agora divertido</li>
                        <li id="slogan-es">Aprendizaje de idiomas, ahora entretenido</li>
                    </ul>
                    <a className="mb-3" id="btn" href="lesson">Request a Demo</a>
                    <p></p>
                </section>
            </div>
        );
    }
}

export default Header;