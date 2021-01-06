import React from 'react';
import './NameCard.css';

export default class NameCard extends React.Component{
    /**
     * As a NameCard, I:
     *  - Display basic infomation based on
     *      the github login given
     *  - Open a new tab to display the login's
     *      github page
     * I support: 
     *  -this.props.login
     */

    state = {
        loading: true,
        error: null, 

        show: ""
    }
    data = null

    render() {
        return ( 
            <div className = {"NameCard-container " + this.state.show}>
                {this.render_putin()}
            </div>
        );
    }

    componentDidMount() {
        if(!this.props.login) return;
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${this.props.login}`)
            .then((response) => response.json())
            .then((jsondata) => {this.data = jsondata})
            .then(() => this.setState({loading: false}))
            .catch((e) => this.setState({error: e}));

        this.setState({show: "NameCard-container-show"})
    }

    render_putin = () => {
        if(this.state.loading) return <h1>Loading...</h1>;
        if(this.state.error) return <pre>{JSON.stringify(this.state.error, null, 2)}</pre>;
        if(!this.data) return null;
        return (
            <>
                <img className = "profile-pic" alt = {this.data.login} src = {this.data.avatar_url} onClick = {() => window.open(this.data.html_url)}/>
                <div className = "profile-info">
                    <h2>{this.data.name}</h2>
                    <p>{this.data.login}</p>
                    <p>{this.data.location}</p>
                    <div className = "profile-info-bio">{this.data.bio}</div>
                </div>
            </>
        )
    }

}

