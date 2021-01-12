import React from 'react';
import './ChatBox.css';

import socketIOClient from "socket.io-client";

export default class ChatBox extends React.Component{
    /**
     */
    ENDPOINT = "http://127.0.0.1:4001";
    socket = socketIOClient(this.ENDPOINT);
    state = {
        text: ""
    }
  
    render() {
        return ( 
            <div className = "ChatBox-container">
                <input type="text" value={this.state.text} onChange={this.textchange} />
                <button onClick = {this.submit}>submit</button>
            </div>
        );
    }

    textchange = (e) => {
        this.setState({text: e.target.value})
    }

    submit = () => {
        this.socket.emit('chat message', this.state.text);
        this.setState({text: ""})
    }

}

