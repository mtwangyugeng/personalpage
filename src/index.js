import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectionBar from './connectionbar/ConnectionBar'

import SlidePanels from './slidepanels/SlidePanels'

ReactDOM.render(
  <React.StrictMode>
    <ConnectionBar 
      linkedin = "https://www.linkedin.com/in/yu-geng-wang-474553192/"
      github = "https://github.com/mtwangyugeng"
    />
    <SlidePanels contents = {[0, <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>, 2, 3]} />
    <App login = "mtwangyugeng"/>
    {/* <iframe src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>  */}
  </React.StrictMode>,
  document.getElementById('root')
);