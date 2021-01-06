import React from 'react';
import './SlidePanels.css';

import OnePanel from "./OnePanel"
import Tracker from './tracker/Tracker'

export default class SlidePanels extends React.Component{
    /**
     * As SlidePanels I:
     *  - can contain contents in multiple panels.
     *  - can slide right or left in order to switch the panel
     *      that is showing.
     *  - can keep track, and present visually, on which panel
     *      is currently on display.
     *  - can go to a slide directly by clicking on the trackers
     *  - recieve an list of contents in jsx from @props
     * I support: 
     *  -this.props.contents
     */

    state = {
        currentpanel: 0
    }
    last_index = this.props.contents.length - 1

    render() {
        return ( 
            <div className = "SlidePanels-container">
                <div className = "SlidePanels-main">
                    <button className = "sliderbutton" onClick = {this.slide_left}>{"<"}</button>
                    <OnePanel content = {this.props.contents[this.state.currentpanel]}/>
                    <button className = "sliderbutton" onClick = {this.slide_right}>{">"}</button>
                </div>
                <Tracker last_index = {this.last_index} currentpanel = {this.state.currentpanel}  go_to_slide = {this.go_to_slide}/>
            </div>
        );
    }

    go_to_slide = (mypanelnum) => {
        this.setState({
            currentpanel: mypanelnum
        })
    }

    slide_left = () => {
        if(this.state.currentpanel > 0)
            this.setState({
                currentpanel: this.state.currentpanel - 1
            })
    }

    slide_right = () => {
        if(this.state.currentpanel < this.last_index)
            this.setState({
                currentpanel: this.state.currentpanel + 1
            })
    }

    
}

