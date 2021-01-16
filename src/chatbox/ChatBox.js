import React from 'react';
import './ChatBox.css';

import socketIOClient from "socket.io-client";

import InputAtBottom from './inputatbottom/InputAtBottom'

export default class ChatBox extends React.Component{
    /**
     */
    ENDPOINT = "http://127.0.0.1:4001";
    socket = socketIOClient(this.ENDPOINT);
    state = {
        chat: [],
        text: "",
        display: "none"
    }

    componentDidMount(){
        this.socket.on('chat message', (msg) => {
            var neo = this.state.chat
            neo.push(<div>{msg}</div>)
            this.setState({chat: neo})
        });
        console.log(this.state.chat)
    }
    
  
    render() {
        return ( 
            <div className = "ChatBox-withbutton">
                <div className = "ChatBox-container" style = {{display: this.state.display}}>
                    <div className = "Chat-container">
                        {this.state.chat.map((v) => v)}
                    </div>
                    <InputAtBottom textchange = {this.textchange} submit = {this.submit} text = {this.state.text}/>
                </div>
                <div className = "ChatBox-button" onClick = {this.toggledisplay}>Chat</div>
            </div>
        );
    }

    toggledisplay = () => {
        if(this.state.display === 'none')
            this.setState({display: 'flex'})
        else
            this.setState({display: 'none'})
    }

    textchange = (e) => {
        this.setState({text: e.target.value})
    }

    submit = () => {
        this.socket.emit('chat message', this.state.text);
        this.setState({text: ""})
    }

    
}

