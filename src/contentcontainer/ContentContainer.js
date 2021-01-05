import React from 'react';
import './ContentContainer.css';

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
            </div>
        );
    }


}

