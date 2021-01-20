import React from 'react';
import './ConnectionBar.css';

export default class ConnectionBar extends React.Component{
    /**
     * As a connection bar, I navigate:
     * 
     */
    state = {
        stick: ""
    }
    pos = React.createRef()

    render() {
        return ( 
            <div ref = {this.pos} className = {"the-bar "  + this.state.stick}>
                <div style = {{width: this.props.progress}} className = "ConnectionBar-progress"></div>
                {/* <div className = {"linkedin icons"} onClick = {this.golinkedin}></div>
                <div className = "github icons" onClick = {this.gogithub}></div>
                <div className = "resume" onClick = {() => window.open(this.props.resume)}>Resume</div> */}
            </div>
        );
    }

    componentDidMount(){
        this.sticky = this.pos.current.offsetTop;
        window.onresize = () => {
            this.setState({
                stick: ""
            })
            this.sticky = this.pos.current.offsetTop;
            if(window.pageYOffset > this.sticky) 
                this.setState({
                    stick: "sticky"
                })
        }
        window.onscroll = this.stick_it;
    }

    stick_it = () =>{
        if(window.pageYOffset > this.sticky) 
            this.setState({
                stick: "sticky"
            })
        else
            this.setState({
                stick: ""
            })
    }

    golinkedin = () => {
        window.open(this.props.linkedin)
    }

    gogithub = () => {
        window.open(this.props.github)
    }
}

