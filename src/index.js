import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConnectionBarStatic from './connectionbarstatic/ConnectionBarStatic'

import NameCard from './namecard/NameCard'
import ContentContainer from './contentcontainer/ContentContainer'

import ChatBox from './chatbox/ChatBox'

ReactDOM.render(
  <React.StrictMode>
    {/* <ChatBox/> */}
    <ConnectionBarStatic 
      linkedin = "https://www.linkedin.com/in/yu-geng-wang-474553192/"
      github = "https://github.com/mtwangyugeng"
      resume = "https://raw.githubusercontent.com/mtwangyugeng/resume/master/Short_Resume.YuGeng.Wang.pdf"
    />
    <NameCard login = "mtwangyugeng" style = {{width:"60vw", height: "25vw", fontSize: "1.5vw"}}/>
    {/* <NameCard login = "epicsteve2"/> */}
    {/* <ConnectionBar
      linkedin = "https://www.linkedin.com/in/yu-geng-wang-474553192/"
      github = "https://github.com/mtwangyugeng"
      resume = "https://raw.githubusercontent.com/mtwangyugeng/resume/master/Short_Resume.YuGeng.Wang.pdf"
    /> */}
    <div>
      <ContentContainer/>
    </div>
    {/* <SlidePanels contents = {[-1,0, <iframe width="100%" height="100%" src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>, 2, 3, 4]} /> */}
    {/* <App login = "mtwangyugeng"/> */}
    {/* <iframe src="https://mtwangyugeng.github.io/hbeatbox/" title="W3Schools Free Online Web Tutorials"></iframe>  */}
    <NameCard login = "mtwangyugeng" style = {{width:"60vw", height: "25vw", fontSize: "1.5vw"}}/>
    <ConnectionBarStatic 
      linkedin = "https://www.linkedin.com/in/yu-geng-wang-474553192/"
      github = "https://github.com/mtwangyugeng"
      resume = "https://raw.githubusercontent.com/mtwangyugeng/resume/master/Short_Resume.YuGeng.Wang.pdf"
    />
  </React.StrictMode>,
  document.getElementById('root')
);