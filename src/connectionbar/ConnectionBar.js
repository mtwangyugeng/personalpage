import React from 'react';
import './ConnectionBar.css';

export default class SpeedChanger extends React.Component{
    /**
     * As a connection bar, I:
     *  - put a bar in the container with websites logos.
     *  - recieve http addresses from @props and link them
     *      to the corresponding logos.
     * I support: 
     *  -this.props.linkedin
     *  -this.props.github
     */
    state = {
        stick: ""
    }

    render() {
        return ( 
            <div id = "sticktop" className = {"the-bar "  + this.state.stick}>
                <div className = {"linkedin icons"} onClick = {this.golinkedin}></div>
                <div className = "github icons" onClick = {this.gogithub}></div>
                <div className = "sayhi">{"<<<"} Connect with me!</div>
            </div>
        );
    }

    componentDidMount(){
        var header = document.getElementById("sticktop");
        this.sticky = header.offsetTop;
        window.onresize = () => {
            this.setState({
                stick: ""
            })
            this.sticky = header.offsetTop;
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

