import React from 'react';
import './InputAtBottom.css';


export default class InputAtBottom extends React.Component{

    tt = React.createRef()
    state = {height: "1em"}
    render() {
        return ( 
            <div className = "InputAtBottom-container">
                <textarea ref={this.tt} style = {{height: this.state.height}} value = {this.props.text} className = "InputAtBottom-text" onChange={this.textchange} onKeyPress = {(e) => e.key === 'Enter' ? this.submit(): null}/>
                <button onClick = {this.submit}>submit</button>
            </div>
        );
    }

    textchange = (e) => {
        this.props.textchange(e)
        this.setState({height: this.tt.current.scrollHeight + "px"})
    }

    submit = () => {
        this.props.submit()
    }

    
}

