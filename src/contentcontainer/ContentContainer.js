import React from 'react';
import './ContentContainer.css';

// no need later
import SlideExplainations from '../slideexplainations/SlideExplainations'

export default class ContentContainer extends React.Component{
    /**
     * As a ContentContainer, I:
     *  - Display the content section I am given.
     * I support: 
     *  -this.props.sections: a list of content section Object
     */

    render() {
        return ( 
            <div className = "ContentContainer-container">
                <div className = "ContentContainer-content">
                    <h2 className = "ContentContainer-title">Projects</h2>
                    <div className = "ContentContainer-section">
                        <SlideExplainations/>
                    </div>
                </div>
            </div>
        );
    }



}

