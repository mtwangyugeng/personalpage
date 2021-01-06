import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectionBar from './connectionbar/ConnectionBar'

import SlidePanels from './slidepanels/SlidePanels'
import NameCard from './namecard/NameCard'
import ContentContainer from './contentcontainer/ContentContainer'

ReactDOM.render(
  <React.StrictMode>
    <NameCard login = "mtwangyugeng"/>
    {/* <NameCard login = "epicsteve2"/> */}
    <ConnectionBar 
      linkedin = "https://www.linkedin.com/in/yu-geng-wang-474553192/"
      github = "https://github.com/mtwangyugeng"
    />
    <ContentContainer/>
    {/* <SlidePanels contents = {[-1,0, <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>, 2, 3, 4]} /> */}
    {/* <App login = "mtwangyugeng"/> */}
    {/* <iframe src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>  */}
    <NameCard login = "epicsteve2"/>
  </React.StrictMode>,
  document.getElementById('root')
);