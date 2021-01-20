import React from 'react';
import './ConnectionBar.css';

export default class ConnectionBar extends React.Component{
    /**
     * As a connection bar, I navigate:
     * 
     */
    state = {
        stick: ""
    }
    pos = React.createRef()

    render() {
        return ( 
            <div ref = {this.pos} className = {"the-bar "  + this.state.stick}>
                <div className = "ConnectionBar-top" onClick = {this.goto(0)}>⬆️Top</div>
                <div className = "ConnectionBar-rightbar">
                    <div className = "ConnectionBar-secpos"> 
                        
                        {this.props.secpos.map(([title,y,siz]) => 
                        <div className = "ConnectionBar-sec" style = {{width: siz + "%"}} onClick = {this.goto(y.current.offsetTop)}>
                            {title}
                        </div>
                        )}
                    </div>
                    <div style = {{width: this.props.progress}} className = "ConnectionBar-progress"></div>
                </div>
            </div>
        );
    }


    goto = (y) => {
        return () => window.scrollTo({
            top: y - this.pos.current.offsetHeight,
            left: 0,
            behavior: 'smooth'
          })
    }

    componentDidMount(){
        this.sticky = this.pos.current.offsetTop;
        window.onresize = () => {
            this.setState({
                stick: ""
            })
            this.sticky = this.pos.current.offsetTop;
            if(window.pageYOffset > this.sticky) 
                this.setState({
                    stick: "sticky"
                })
        }
        window.onscroll = this.stick_it;
    }

    stick_it = () =>{
        if(window.pageYOffset > this.sticky) 
            this.setState({
                stick: "sticky"
            })
        else
            this.setState({
                stick: ""
            })
    }
}

