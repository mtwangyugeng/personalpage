import React from 'react';
import './SlideExplainations.css';

// no need later
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
        tags: ["javascript", "react.js", "CSS", "HTML"], 
        content: <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>,
        explaination: "My first react project!"
    }

    test = {
        tags: ["a", "bb", "ccc", "ddd", "kappaman"], 
        content: <h1>SlidePanels are cool!</h1>,
        explaination: "This is just a placeholder to see if the slidepanels are working properly"
    }

    tt = [this.hbeatbox, this.test]

    render() {
        return ( 
            <div className = "SlideExplainations-container">
                <SlidePanels contents = {this.tt} go_to_slide = {this.go_to_slide} slide_left = {this.slide_left} slide_right = {this.slide_right}/>
                <h4>{this.test.hi}</h4>
                <Tags tags = {this.tt[this.state.currentpanel].tags} />
                {this.tt[this.state.currentpanel].explaination}
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

