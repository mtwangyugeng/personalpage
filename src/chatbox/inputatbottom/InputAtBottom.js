import React from 'react';
import './InputAtBottom.css';


export default class InputAtBottom extends React.Component{

    tt = React.createRef()
    state = {height: "1em"}
    render() {
        return ( 
            <div className = "InputAtBottom-container" style = {{display: this.props.display}}>
                <textarea ref={this.tt} style = {{height: this.state.height}} value = {this.props.text} className = "InputAtBottom-text" onChange={this.textchange} onKeyPress = {this.entersubmit}/>
                <div onClick = {this.submit}>submit</div>
            </div>
        );
    }

    textchange = (e) => {
        this.props.textchange(e)
        this.setState({height: "1em"})
    }

    componentDidUpdate(){
        if(this.state.height === "1em")
            this.setState({height: this.tt.current.scrollHeight + "px"})
    }

    submit = () => {
        this.props.submit()
    }

    entersubmit = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault()
            this.submit()
            this.setState({height: "1em"})
        }
    }
    
}

