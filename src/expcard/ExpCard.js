import React from 'react';
import Tags from '../slideexplainations/tags/Tags';
import './ExpCard.css';

export default class ExpCard extends React.Component{
    /**
     * As a ExpCard, I:
     *  - Display basic infomation based on
     *      the github login given
     *  - Open a new tab to display the login's
     *      github page
     * I support: 
     *  -this.props.login
     */

    state = {
        show: ""
    }
    pos = React.createRef()

    render() {
        return ( 
            <div ref={this.pos} className = {"ExpCard-container " + this.state.show}>
                <img className = "ExpCard-pic" alt = 'pic here' src = {this.props.imsrc}/>
                <div className = "ExpCard-info">
                    <div style = {{fontWeight: "bold", fontSize:"1.7vmin"}}>{this.props.title}</div>
                    <div>{this.props.time}</div>
                    <Tags tags = {this.props.tags}/>
                    <div>{this.props.description}</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible)
    }

    handlevisible = () => {
        if(!this.show && (this.pos.current.offsetTop + this.pos.current.offsetHeight/2) < (window.scrollY + window.innerHeight) && this.pos.current.offsetTop + this.pos.current.offsetHeight > window.scrollY)
            this.setState({show: "ExpCard-container-show"})
        else
            this.setState({show: ""})
    }


}

