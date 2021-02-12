import React from 'react';
import './NavigationBar.css';

export default class NavigationBar extends React.Component{
    /**
     * As a connection bar, I navigate:
     * 
     */
    state = {
        stick: "",
        appear: "appear"
    }
    pos = React.createRef()
    render() {
        return ( 
            <>
            <div className = {"NavigationBar-top " + this.state.appear} onClick = {this.goto(0)}>↑</div>
            <div ref = {this.pos} className = {"the-bar "  + this.state.stick}>
                
                <div className = "NavigationBar-rightbar">
                    <div className = "NavigationBar-secpos"> 
                        
                        {this.props.secpos.map(([title,y,siz]) => 
                        <div className = "NavigationBar-sec" style = {{width: siz + "%"}} onClick = {this.goto(y.current.offsetTop)}>
                            {title}
                        </div>
                        )}
                    </div>
                    <div style = {{width: this.props.progress}} className = "NavigationBar-progress"></div>
                </div>
            </div></>
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
        window.addEventListener('scroll', this.stick_it, false);
        window.addEventListener('scroll', this.mouse_moved, false);
        window.addEventListener('mousemove', this.mouse_moved, false);
    }

    sto = setTimeout(() => this.setState({appear: ""}), 3000);
    mouse_moved = () => {
        // console.log("iit moved!!!")
        this.setState({appear: "appear"})
        clearTimeout(this.sto);
        this.sto = setTimeout(() => this.setState({appear: ""}), 3000);

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

