import React from 'react';
import './Badges.css';

export default class ThankPerson extends React.Component{
    pos = React.createRef()
    state = {show: ""}
    d = ["0s", "0.2s", "0.4s"]
    render() {
        return ( 
            <div ref={this.pos} className = {'ThankPerson-badges' }>
                {this.props.ba.map((v,i) => <div style={{animationDelay: this.d[i]}} className = {v + " " + this.state.show}/>)}
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
            this.setState({show: "ThankPerson-badges-show"})
        else
            this.setState({show: ""})
    }

}

