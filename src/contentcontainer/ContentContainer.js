import React from 'react';
import './ContentContainer.css';

// no need later
import SlideExplainations from '../slideexplainations/SlideExplainations'
import NameCard from '../namecard/NameCard'
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
                    <h2 className = "ContentContainer-title">Special Thanks</h2>
                    <div className = "ContentContainer-section" style = {{background:"black"}}>
                        <NameCard login = "epicsteve2"/>
                        <NameCard login = "JDong3"/>
                    </div>
                    <h2 className = "ContentContainer-title"></h2>
                    <div className = "footer">Copyright (c) 2021 Simon Wang</div>
                </div>
            </div>
        );
    }



}

