import React from 'react';
import './ContentContainer.css';

// no need later
import SlidePanels from '../slidepanels/SlidePanels'

export default class ContentContainer extends React.Component{
    /**
     * As a ContentContainer, I:
     *  - Display the content section I am given, in flex columns.
     * I support: 
     *  -this.props.sections: a list of content section Object
     */

    render() {
        return ( 
            <div className = "ContentContainer-container">
                <div className = "ContentContainer-content">
                    <h4> my works </h4>
                    <SlidePanels contents = {[-1,0, <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>, 2, 3, 4]} />
                </div>
            </div>
        );
    }



}

