import React from 'react';
import './OnePanel.css';

export default class OnePanel extends React.Component{
    /**
     * As OnePanel I:
     *  - can contain single content passed by SlidePanels @props
     * I support: 
     *  -this.props.content
     */


    render() {
        return ( 
            <div className = "OnePanel-container">
                {this.props.content}
            </div>
        );
    }    
}

