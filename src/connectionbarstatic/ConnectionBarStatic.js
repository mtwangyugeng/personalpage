import React from 'react';
import './ConnectionBarStatic.css';

export default class ConnectionBarStatic extends React.Component{
    /**
     * As a connection bar, I:
     *  - put a bar in the container with websites logos.
     *  - recieve http addresses from @props and link them
     *      to the corresponding logos.
     * I support: 
     *  -this.props.linkedin
     *  -this.props.github
     */

    render() {
        return ( 
            <div className = {"ConnectionBarStatic-the-bar"}>
                <div className = {"ConnectionBarStatic-linkedin ConnectionBarStatic-icons"} onClick = {this.golinkedin}></div>
                <div className = "ConnectionBarStatic-github ConnectionBarStatic-icons" onClick = {this.gogithub}></div>
                <div className = "ConnectionBarStatic-resume" onClick = {() => window.open(this.props.resume)}>Resume</div>
            </div>
        );
    }

    golinkedin = () => {
        window.open(this.props.linkedin)
    }

    gogithub = () => {
        window.open(this.props.github)
    }
}

