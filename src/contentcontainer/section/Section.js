import React from 'react';
import './Section.css';

export default class Section extends React.Component{
    /**
     * As a Section, I:
     *  -this.props.title
     *  -this.props.content
     */
    pos = React.createRef()
    state = {show: false}


    render() {
        return (
            <>
                <div ref = {this.pos} className = {"Section-title " + (this.state.show ? "Section-title-show":"")}>{this.props.title}</div>
                <div className = {"Section-underline " + (this.state.show ? "Section-underline-show":"")}/>
                <div className = "Section-content">
                    {this.props.content}
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
        if(!this.show && (this.pos.current.offsetTop + this.pos.current.offsetHeight) < (window.scrollY + window.innerHeight) && this.pos.current.offsetTop > window.scrollY)
            this.setState({show: true})
        else
            this.setState({show: false})
    }


}

