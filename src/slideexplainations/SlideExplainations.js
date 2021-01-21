import React from 'react';
import './SlideExplainations.css';

import SlidePanels from './slidepanels/SlidePanels'
import Tags from "./tags/Tags";

export default class SlideExplainations extends React.Component{
    /**
     * As a SlideExplainations, I:
     */
    state = {
        currentpanel: 0
    }

    hbeatbox = {
        title: "Simple Beat-Machine",
        tags: ["javascript", "react.js", "CSS", "HTML"], 
        content: <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="hbeatbox"></iframe>,
        repository: "https://github.com/mtwangyugeng/hbeatbox",
        explaination: "My first react project! Click anywhere in the black box in start. Make your own awesome beats by clicking on the button panel at the bottom. You can play, stop, pause, clear, save, and load your beats!"
    }

    test = {
        title: "My Personal Webpage",
        tags: ["javascript", "react.js", "CSS", "HTML", 'socket.io', 'REST'], 
        content: <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/personalpage/" title="personalpage"></iframe>,
        repository: "https://github.com/mtwangyugeng/personalpage",
        explaination: "It is this website! For the purpose of learning, no library other than react.js in used and no bootstraps. The components in the Webpage is highly reusable, check out its GitHub page."
    }

    tt = [this.hbeatbox, this.test]

    render() {
        return ( 
            <div className = "SlideExplainations-container">
                <SlidePanels contents = {this.tt} go_to_slide = {this.go_to_slide} slide_left = {this.slide_left} slide_right = {this.slide_right}/>
                <div className = "SlideExplainations-explainations">
                    <div style = {{fontWeight:"bold"}}>{this.tt[this.state.currentpanel].title}</div>
                    <Tags tags = {this.tt[this.state.currentpanel].tags} />
                    {this.tt[this.state.currentpanel].explaination}
                    <div className = "SlideExplainations-github" onClick = {() => window.open(this.tt[this.state.currentpanel].repository)}></div>
                </div>
            </div>
        );
    }

    go_to_slide = (mypanelnum) => {
        this.setState({
            currentpanel: mypanelnum
        })
    }

    slide_left = () => {
        this.setState({
            currentpanel: this.state.currentpanel - 1
        })
    }

    slide_right = () => {
        this.setState({
            currentpanel: this.state.currentpanel + 1
        })
    }



}

