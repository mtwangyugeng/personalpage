import React from 'react';
import './ConnectionBar.css';

export default class SpeedChanger extends React.Component{
    /**
     * As a connection bar, I:
     *  - put a bar in the container with websites logos.
     *  - recieves http addresses from @props and link them
     *      to the corresponding logos.
     * I support: 
     *  -this.props.linkedin
     *  -this.props.github
     */
    render() {
        return ( 
            <div className = "the-bar">
                <div className = "linkedin icons" onClick = {this.golinkedin}></div>
                <div className = "github icons" onClick = {this.gogithub}></div>
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

