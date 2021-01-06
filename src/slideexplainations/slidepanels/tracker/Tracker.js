import React from 'react';
import './Tracker.css';
import TrackerDot from './TrackerDot';

export default class Tracker extends React.Component{
    /**
     * As Tracker I:
     *  - track which panel SlidePanel is displaying
     * I support: 
     *  -this.props.last_index
     *  -this.props.currentpanel
     */


    render() {
        return ( 
            <div className = "Tracker-container">
                {this.render_getDots()}
            </div>
        );
    }

    render_getDots = () => {
        var i
        var finale = []
        for(i = 0; i <= this.props.last_index; i++)
            finale.push(<TrackerDot mypanelnum = {i} 
                currentpanel = {this.props.currentpanel}
                go_to_slide = {this.props.go_to_slide}/>)
        return finale
    }

}

