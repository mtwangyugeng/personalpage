import React from 'react';
import './SlideExplainations.css';

// no need later
import SlidePanels from './slidepanels/SlidePanels'
import Tags from "./tags/Tags";

export default class SlideExplainations extends React.Component{
    /**
     * As a SlideExplainations, I:
     */

    render() {
        return ( 
            <div className = "SlideExplainations-container">
                <SlidePanels contents = {[<iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>, 2, 3, 4]} />
                <Tags/>
            </div>
        );
    }



}

