import React from 'react';
import './ContentContainer.css';

// no need later
import Section from './section/Section'

import SlideExplainations from '../slideexplainations/SlideExplainations'
import NameCard from '../namecard/NameCard'

import ConnectionBar from './connectionbar/ConnectionBar';

import placeholder from './placeholder.png'

export default class ContentContainer extends React.Component{
    /**
     * As a ContentContainer, I:
     *  - Display the content section I am given.
     * I support: 
     *  -this.props.sections: a list of content section Object
     */
    state = {
        progress: 10,
        secpos: []
        }
    pos = React.createRef()

    sec1 = {
        title: "Projects",
        content: <SlideExplainations/>,
        pos: React.createRef()
    }

    sec2 = {
        title: "Experience",
        content: <img src= {placeholder} alt="placeholder" style={{height: "70vmin"}}/>,
        pos: React.createRef()
    }

    sec3 = {
        title: "Achievements",
        content: <><NameCard login = "epicsteve2"/>
                    <NameCard login = "JDong3"/></>,
        pos: React.createRef()
    }

    sec4 = {
        title: "Special Thanks",
        content: <><NameCard login = "epicsteve2"/>
                    <NameCard login = "JDong3"/></>,
        pos: React.createRef()
    }


    secs = [this.sec1, this.sec2, this.sec3,this.sec4]

    render() {
        return (
            <>
            <ConnectionBar progress = {this.state.progress + "%"} secpos = {this.state.secpos}/>
                <div className = "ContentContainer-container">
                    <div className = "ContentContainer-content"> 
                        <div ref = {this.pos}>
                            {this.secs.map((v) => <Section title = {v.title} content = {v.content} pos = {v.pos}/>)}
                        </div>
                        <Section/>
                        <div className = "footer">Copyright (c) 2021 Simon Wang</div>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount(){
        var secpos = this.secs.map((v) => [v.title, v.pos, Math.floor((v.pos.current.offsetHeight) / (this.pos.current.offsetHeight)*100)])
        console.log(secpos)
        this.setState({secpos: secpos})
        this.handlescroll()
        window.addEventListener('scroll', this.handlescroll);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlescroll)
    }    

    handlescroll = () => {
        // this.pos.current.offsetTop + this.pos.current.offsetHeight
        var neo = Math.floor((window.scrollY) / (this.pos.current.offsetTop + this.pos.current.offsetHeight)*100)
        // var neo = Math.floor((Math.max(window.scrollY - this.pos.current.offsetTop, 0)) / (this.pos.current.offsetHeight - window.innerHeight)*100)
        this.setState({progress: neo})
    }

    


}

