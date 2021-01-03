import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectionBar from './connectionbar/ConnectionBar'

ReactDOM.render(
  <React.StrictMode>
    <ConnectionBar 
      linkedin = "https://www.linkedin.com/in/yu-geng-wang-474553192/"
      github = "https://github.com/mtwangyugeng"
    />
    <App login = "mtwangyugeng"/>
    {/* <iframe src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>  */}
  </React.StrictMode>,
  document.getElementById('root')
);