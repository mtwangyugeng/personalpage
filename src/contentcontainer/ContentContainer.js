import React from 'react';
import './ContentContainer.css';

// no need later
import Section from './section/Section'

import SlideExplainations from '../slideexplainations/SlideExplainations'
import NameCard from '../namecard/NameCard'

import ConnectionBar from './connectionbar/ConnectionBar';
export default class ContentContainer extends React.Component{
    /**
     * As a ContentContainer, I:
     *  - Display the content section I am given.
     * I support: 
     *  -this.props.sections: a list of content section Object
     */
    state = {progress: 10}
    pos = React.createRef()
    render() {
        return (
            <>
            <ConnectionBar progress = {this.state.progress + "%"}/>
            <div ref = {this.pos}>
            <div className = "ContentContainer-container">
                <div className = "ContentContainer-content">
                    <Section title = "Projects" content = {<SlideExplainations/>}/>
                    <Section title = "Special Thanks"
                        content = {<><NameCard login = "epicsteve2"/>
                                    <NameCard login = "JDong3"/></>}/>
                    <Section/>
                    <div className = "footer">Copyright (c) 2021 Simon Wang</div>
                </div>
            </div>
            </div>
            </>
        );
    }

    componentDidMount(){
        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible)
    }    

    handlevisible = () => {
        // this.pos.current.offsetTop + this.pos.current.offsetHeight
        var neo = Math.floor((window.scrollY) / (this.pos.current.offsetTop + this.pos.current.offsetHeight - window.innerHeight)*100)
        this.setState({progress: neo})
    }

    


}

