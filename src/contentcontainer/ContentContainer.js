import React from 'react';
import './ContentContainer.css';

// no need later
import Section from './section/Section'

import SlideExplainations from '../slideexplainations/SlideExplainations'
import NameCard from '../namecard/NameCard'

import NavigationBar from './navigationbar/NavigationBar';

import ExpCard from '../expcard/ExpCard';

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

    //-------------------
    ec1 = {
        imsrc: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",
        title: "Agile Group Projects",
        tags: ["Academic","Agile", "Scrums"], 
        time: "2017 - 2019",
        description: "Agile Development project experience from CSCC01, CSCD01"
    }
    ec2 = {
        imsrc: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",
        title: "Operating System Mechanisms",
        tags: ["Academic","C","Shell"], 
        time: "Apr 2018 - Aug 2018",
        description: "Reproduced OS mechanics using C in CSCC69"
    }
    ec3 = {
        imsrc: "https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png",
        title: "Phone App Development",
        tags: ["Academic","Andriod Studio","java"], 
        time: "Jan 2016 - Mar 2016",
        description: "Developed a plane ticket booking app."
    }
    ec4 = {
        imsrc: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Toad-Original_RGB.png",
        title: "UI Development",
        tags: ["Academic", "Toad for Oracle", "HCI"], 
        time: "Apr 2018 - Aug 2018",
        description: "Developed a new UI fot TforO."
    }
    ecl = {
        imsrc: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        title: "Web Development",
        tags: ["Self-learning","React.js"], 
        time: "Dec 2020 - Jan 2021",
        description: "Self-Learning Javascript, CSS, HTML, React.js."
    }
    
    ecs = [this.ec1, this.ec2, this.ec3, this.ec4, this.ecl]
    sec2 = {
        title: "Experience",
        content: <div style = {{display: "flex",justifyContent:"space-around", flexWrap: "wrap",width: "100%", backgroundColor:"black", padding:"0.5vmin"}}>
            {this.ecs.map((v) => <ExpCard imsrc = {v.imsrc} title = {v.title} tags = {v.tags} time = {v.time} description = {v.description}/>)}
            {/* <ExpCard imsrc = {this.ec1.imsrc} title = {this.ec1.title} tags = {this.ec1.tags} time = {this.ec1.time} description = {this.ec1.description}/> */}
            {/* <ExpCard/>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/> */}
            </div>,
        pos: React.createRef()
    }
    //--------------------

    sec3 = {
        title: "Special Thanks",
        content: <><NameCard login = "epicsteve2"/>
                    <NameCard login = "JDong3"/></>,
        pos: React.createRef()
    }


    secs = [this.sec1, this.sec2, this.sec3]

    render() {
        return (
            <>
            <NavigationBar progress = {this.state.progress + "%"} secpos = {this.state.secpos}/>
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
        // console.log(secpos)
        this.setState({secpos: secpos})
        this.handlescroll()
        window.addEventListener('scroll', this.handlescroll);
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlescroll)
    }    

    handlescroll = () => {
        // this.pos.current.offsetTop + this.pos.current.offsetHeight
        // var neo = Math.floor((window.scrollY) / (this.pos.current.offsetTop + this.pos.current.offsetHeight)*100)
        var neo = Math.floor((Math.max(window.scrollY - this.pos.current.offsetTop, 0)) / (this.pos.current.offsetHeight - window.innerHeight)*100)
        this.setState({progress: neo})
    }

    


}

