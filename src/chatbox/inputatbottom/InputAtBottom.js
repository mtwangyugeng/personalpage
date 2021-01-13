import React from 'react';
import './InputAtBottom.css';


export default class InputAtBottom extends React.Component{

    render() {
        return ( 
            <div className = "InputAtBottom-container">
                <input className = "InputAtBottom-text" type="text" value={this.props.text} onChange={this.textchange} onKeyPress = {(e) => e.key === 'Enter' ? this.submit(): null} />
                <button onClick = {this.submit}>submit</button>
            </div>
        );
    }

    textchange = (e) => {
        this.props.textchange(e)
    }

    submit = () => {
        this.props.submit()
    }

    
}

