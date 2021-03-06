import React from 'react';
import './TrackerDot.css';

export default class TrackerDot extends React.Component{
    /**
     * As TrackerDot I:
     *  - track which panel SlidePanel is displaying
     * I support: 
     *  -this.props.mypanelnum
     *  -this.props.currentpanel
     */
    css_classes = ["TrackerDot-off", "TrackerDot-on"]

    render() {
        return ( 
            <div onClick = {this.go_to_slide} className = 
                {"TrackerDot " + this.css_classes[this.props.mypanelnum === this.props.currentpanel ? 1 : 0]}>
                    {/* {this.props.mypanelnum === this.props.currentpanel ? 1 : 0} */}
            </div>
        );
    }

    go_to_slide = () => {
        this.props.go_to_slide(this.props.mypanelnum)
    }

    
}

