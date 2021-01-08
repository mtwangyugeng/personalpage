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
        content: <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>,
        repository: "https://github.com/mtwangyugeng/hbeatbox",
        explaination: "My first react project!"
    }

    test = {
        title: "Placeholder",
        tags: ["a", "bb", "ccc", "ddd", "kappaman"], 
        content: <h1>SlidePanels are cool!</h1>,
        repository: "https://github.com/mtwangyugeng",
        explaination: "This is just a placeholder to see if the slidepanels are working properly"
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
                    <div className = "SlideExplainations-github" onClick = {() => window.open("https://github.com/mtwangyugeng/hbeatbox")}></div>
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

