import React from 'react';
import './Tags.css';

export default class Tags extends React.Component{
    /**
     * As a Tags, I:
     * 
     * I support: 
     *  -this.props.tags
     */

    render() {
        return ( 
            <div className = "Tags-container">
                {this.props.tags.map((v) => 
                    <div className = "tag">
                        {v}
                    </div>
                )}
            </div>
        );
    }

    render_tag = () => {
        this.props.tags.map((v) => 
            <div className = "tag">
                v
            </div>
        )
    }



}

