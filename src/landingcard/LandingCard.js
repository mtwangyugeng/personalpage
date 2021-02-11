import React from 'react';
import './LandingCard.css';

export default class Landingcard extends React.Component{
    /**
     */

    state = {
        loading: true,
        error: null, 

        show: ""
    }
    data = null
    dataimage = null
    card = React.createRef()

    render() {
        return ( 
            <div ref={this.card} className = {"LandingCard-container " + this.state.show}>
               
                {this.render_putin()}
                
                {/* <div className = {"ConnectionBarStatic-linkedin ConnectionBarStatic-icons"} onClick = {this.goto_link(this.props.linkedin)}></div>
                <div className = "ConnectionBarStatic-github ConnectionBarStatic-icons" onClick = {this.goto_link(this.props.github)}></div> */}
                
            </div>
        );
    }

    goto_link = (link) => {
        return () => window.open(link);
    }

    componentDidMount() {
        if(!this.props.login) return;
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${this.props.login}`)
            .then((response) => response.json())
            .then((jsondata) => {this.data = jsondata})
            .then(() => fetch(this.data.avatar_url)
                    .then(response => response.blob())
                    .then(images => this.dataimage = URL.createObjectURL(images)))
            .then(() => this.setState({loading: false}))
            .catch((e) => this.setState({error: e}));

        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
        // this.setState({show: "NameCard-container-show"})
    } componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible)
    }

    handlevisible = () => {
        // console.log(this.props.login, this.card.current.offsetTop , window.scrollY)
        if(!this.show && (this.card.current.offsetTop + this.card.current.offsetHeight) < (window.scrollY + window.innerHeight) && this.card.current.offsetTop > window.scrollY)
            this.setState({show: "LandingCard-container-show"})
        else
            this.setState({show: ""})
    }


    render_putin = () => {
        if(this.state.loading) return <h1>Loading...</h1>;
        if(this.state.error) return <pre>{JSON.stringify(this.state.error, null, 2)}</pre>;
        if(!this.data) return null;
        return (
            <div className = {"LandingCard-maincontainer "}>
                <img className = "LandingCard-profile-pic" alt = {this.data.login} src = {this.dataimage}/>
                <div className = "LandingCard-profile-info">
                
                    <h2>{this.data.name}</h2>
                    <p>{this.data.login}</p>
                    <p>{this.data.location}</p>
                    <div className = "LandingCard-profile-info-bio">{this.data.bio}</div>
                    <div className = "LandingCard-icons">
                        <div className = {"LandingCard-github LandingCard-icon"} onClick = {this.goto_link(this.props.github)}></div>
                        <div className = "LandingCard-linkedin LandingCard-icon" onClick = {this.goto_link(this.props.linkedin)}></div>
                        
                        <div className = "LandingCard-resume" onClick = {this.goto_link(this.props.resume)}>Resume</div>
                    </div>
                </div>
            </div>
        )
    }

}

