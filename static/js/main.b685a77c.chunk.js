(this.webpackJsonppersonalpage=this.webpackJsonppersonalpage||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),a=n.n(s),r=n(35),o=n.n(r),c=(n(42),n(13));n(43);var l=n(2),d=n(3),p=n(5),u=n(4),h=(n(44),a.a.Component,n(45),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,error:null,show:""},t.data=null,t.dataimage=null,t.card=a.a.createRef(),t.handlevisible=function(){!t.show&&t.card.current.offsetTop+t.card.current.offsetHeight<window.scrollY+window.innerHeight&&t.card.current.offsetTop>window.scrollY?t.setState({show:"NameCard-container-show"}):t.setState({show:""})},t.render_putin=function(){return t.state.loading?Object(i.jsx)("h1",{children:"Loading..."}):t.state.error?Object(i.jsx)("pre",{children:JSON.stringify(t.state.error,null,2)}):t.data?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{className:"profile-pic",alt:t.data.login,src:t.dataimage,onClick:function(){return window.open(t.data.html_url)}}),Object(i.jsxs)("div",{className:"profile-info",children:[Object(i.jsx)("h2",{children:t.data.name}),Object(i.jsx)("p",{children:t.data.login}),Object(i.jsx)("p",{children:t.data.location}),Object(i.jsx)("div",{className:"profile-info-bio",children:t.data.bio})]})]}):null},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{ref:this.card,className:"NameCard-container "+this.state.show,style:this.props.style,children:this.render_putin()})}},{key:"componentDidMount",value:function(){var t=this;this.props.login&&(this.setState({loading:!0}),fetch("https://api.github.com/users/".concat(this.props.login)).then((function(t){return t.json()})).then((function(e){t.data=e})).then((function(){return fetch(t.data.avatar_url).then((function(t){return t.blob()})).then((function(e){return t.dataimage=URL.createObjectURL(e)}))})).then((function(){return t.setState({loading:!1})})).catch((function(e){return t.setState({error:e})})),this.handlevisible(),window.addEventListener("scroll",this.handlevisible))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlevisible)}}]),n}(a.a.Component)),g=(n(46),n(47),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).pos=a.a.createRef(),t.state={show:!1},t.handlevisible=function(){!t.show&&t.pos.current.offsetTop+t.pos.current.offsetHeight<window.scrollY+window.innerHeight&&t.pos.current.offsetTop>window.scrollY?t.setState({show:!0}):t.setState({show:!1})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{ref:this.props.pos,className:"Section-container",children:[Object(i.jsx)("div",{ref:this.pos,className:"Section-title "+(this.state.show?"Section-title-show":""),children:this.props.title}),Object(i.jsx)("div",{className:"Section-underline "+(this.state.show?"Section-underline-show":"")}),Object(i.jsx)("div",{className:"Section-content",children:this.props.content})]})}},{key:"componentDidMount",value:function(){this.handlevisible(),window.addEventListener("scroll",this.handlevisible)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlevisible)}}]),n}(a.a.Component)),f=(n(48),n(49),n(50),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"OnePanel-container",children:this.props.content})}}]),n}(a.a.Component)),j=(n(51),n(52),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).css_classes=["TrackerDot-off","TrackerDot-on"],t.go_to_slide=function(){t.props.go_to_slide(t.props.mypanelnum)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{onClick:this.go_to_slide,className:"TrackerDot "+this.css_classes[this.props.mypanelnum===this.props.currentpanel?1:0]})}}]),n}(a.a.Component)),b=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).render_getDots=function(){var e,n=[];for(e=0;e<=t.props.last_index;e++)n.push(Object(i.jsx)(j,{mypanelnum:e,currentpanel:t.props.currentpanel,go_to_slide:t.props.go_to_slide}));return n},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"Tracker-container",children:this.render_getDots()})}}]),n}(a.a.Component),m=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={currentpanel:0},t.last_index=t.props.contents.length-1,t.go_to_slide=function(e){t.setState({currentpanel:e}),t.props.go_to_slide(e)},t.slide_left=function(){t.state.currentpanel>0?(t.setState({currentpanel:t.state.currentpanel-1}),t.props.slide_left()):(t.setState({currentpanel:t.last_index}),t.props.go_to_slide(t.last_index))},t.slide_right=function(){t.state.currentpanel<t.last_index?(t.setState({currentpanel:t.state.currentpanel+1}),t.props.slide_right()):(t.setState({currentpanel:0}),t.props.go_to_slide(0))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"SlidePanels-container",children:[Object(i.jsxs)("div",{className:"SlidePanels-main",children:[Object(i.jsx)("div",{className:"sliderbutton",onClick:this.slide_left,children:"\u2190"}),Object(i.jsx)(f,{content:this.props.contents[this.state.currentpanel].content}),Object(i.jsx)("div",{className:"sliderbutton",onClick:this.slide_right,children:"\u2192"})]}),Object(i.jsx)(b,{last_index:this.last_index,currentpanel:this.state.currentpanel,go_to_slide:this.go_to_slide})]})}}]),n}(a.a.Component),v=(n(53),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).render_tag=function(){t.props.tags.map((function(t){return Object(i.jsx)("div",{className:"tag",children:"v"})}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"Tags-container",children:this.props.tags.map((function(t){return Object(i.jsx)("div",{className:"tag",children:t})}))})}}]),n}(a.a.Component)),O=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={currentpanel:0},t.hbeatbox={title:"\ud83c\udfb5 Simple Beat-Machine",tags:["javascript","react.js","CSS","HTML"],content:Object(i.jsx)("iframe",{width:"100%",height:"100%",src:"https://mtwangyugeng.github.io/hbeatbox/",title:"hbeatbox"}),repository:"https://github.com/mtwangyugeng/hbeatbox",explaination:"My first react project! Click anywhere in the black box in start. Make your own awesome beats by clicking on the button panel at the bottom. You can play, stop, pause, clear, save, and load your beats!"},t.test={title:"\ud83d\ude00 My Personal Webpage",tags:["javascript","react.js","CSS","HTML","socket.io","REST"],content:Object(i.jsx)("iframe",{width:"100%",height:"100%",src:"https://mtwangyugeng.github.io/personalpage/",title:"personalpage"}),repository:"https://github.com/mtwangyugeng/personalpage",explaination:"It is this website! For the purpose of learning, no library other than react.js in used and no bootstraps. The components in the Webpage is highly reusable, check out its GitHub page."},t.pythondatastructures={title:"\ud83d\udcda Data Structures and Algorithms Reproductions in Python",tags:["Python","Data Structures","Algorithm Design"],content:Object(i.jsx)("img",{height:"100vmin",alt:"pic here",src:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"}),repository:"https://github.com/mtwangyugeng/pythondatastructures",explaination:"Reproducing insteresting datastructures for Python for future uses."},t.tt=[t.hbeatbox,t.test,t.pythondatastructures],t.go_to_slide=function(e){t.setState({currentpanel:e})},t.slide_left=function(){t.setState({currentpanel:t.state.currentpanel-1})},t.slide_right=function(){t.setState({currentpanel:t.state.currentpanel+1})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:"SlideExplainations-container",children:[Object(i.jsx)("div",{className:"SlideExplainations-title",children:this.tt[this.state.currentpanel].title}),Object(i.jsx)(m,{contents:this.tt,go_to_slide:this.go_to_slide,slide_left:this.slide_left,slide_right:this.slide_right}),Object(i.jsxs)("div",{className:"SlideExplainations-explainations",children:[Object(i.jsx)(v,{tags:this.tt[this.state.currentpanel].tags}),this.tt[this.state.currentpanel].explaination,Object(i.jsx)("div",{className:"SlideExplainations-github",onClick:function(){return window.open(t.tt[t.state.currentpanel].repository)}})]})]})}}]),n}(a.a.Component),w=(n(54),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={stick:"",appear:"appear"},t.pos=a.a.createRef(),t.goto=function(e){return function(){return window.scrollTo({top:e-t.pos.current.offsetHeight,left:0,behavior:"smooth"})}},t.sto=setTimeout((function(){return t.setState({appear:""})}),1e3),t.mouse_moved=function(){t.setState({appear:"appear"}),clearTimeout(t.sto),t.sto=setTimeout((function(){return t.setState({appear:""})}),1e3)},t.stick_it=function(){window.pageYOffset>t.sticky?t.setState({stick:"sticky"}):t.setState({stick:""})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"NavigationBar-top "+this.state.appear,onClick:this.goto(0),children:"\u2191"}),Object(i.jsx)("div",{ref:this.pos,className:"the-bar "+this.state.stick,children:Object(i.jsxs)("div",{className:"NavigationBar-rightbar",children:[Object(i.jsx)("div",{className:"NavigationBar-secpos",children:this.props.secpos.map((function(e){var n=Object(c.a)(e,3),s=n[0],a=n[1],r=n[2];return Object(i.jsx)("div",{className:"NavigationBar-sec",style:{width:r+"%"},onClick:t.goto(a.current.offsetTop),children:s})}))}),Object(i.jsx)("div",{style:{width:this.props.progress},className:"NavigationBar-progress"})]})})]})}},{key:"componentDidMount",value:function(){var t=this;this.sticky=this.pos.current.offsetTop,window.onresize=function(){t.setState({stick:""}),t.sticky=t.pos.current.offsetTop,window.pageYOffset>t.sticky&&t.setState({stick:"sticky"})},window.addEventListener("scroll",this.stick_it,!1),window.addEventListener("scroll",this.mouse_moved,!1),window.addEventListener("mousemove",this.mouse_moved,!1)}}]),n}(a.a.Component)),x=(n(55),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={show:""},t.pos=a.a.createRef(),t.handlevisible=function(){!t.show&&t.pos.current.offsetTop+t.pos.current.offsetHeight/2<window.scrollY+window.innerHeight&&t.pos.current.offsetTop+t.pos.current.offsetHeight>window.scrollY?t.setState({show:"ExpCard-container-show"}):t.setState({show:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{ref:this.pos,className:"ExpCard-container "+this.state.show,children:[Object(i.jsx)("img",{className:"ExpCard-pic",alt:"pic here",src:this.props.imsrc}),Object(i.jsxs)("div",{className:"ExpCard-info",children:[Object(i.jsx)("div",{style:{fontWeight:"bold",fontSize:"1.7vmin"},children:this.props.title}),Object(i.jsx)("div",{children:this.props.time}),Object(i.jsx)(v,{tags:this.props.tags}),Object(i.jsx)("div",{children:this.props.description})]})]})}},{key:"componentDidMount",value:function(){this.handlevisible(),window.addEventListener("scroll",this.handlevisible)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlevisible)}}]),n}(a.a.Component)),y=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={progress:10,secpos:[]},t.pos=a.a.createRef(),t.sec1={title:"Projects",content:Object(i.jsx)(O,{}),pos:a.a.createRef()},t.ec1={imsrc:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",title:"Agile Group Projects",tags:["Academic","Agile","Scrums"],time:"2017 - 2019",description:"Agile Development project experience from CSCC01, CSCD01"},t.ec2={imsrc:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png",title:"Operating System Mechanisms",tags:["Academic","C","Shell"],time:"Apr 2018 - Aug 2018",description:"Reproduced OS mechanics using C in CSCC69"},t.ec3={imsrc:"https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png",title:"Phone App Development",tags:["Academic","Andriod Studio","java"],time:"Jan 2016 - Mar 2016",description:"Developed a plane ticket booking app."},t.ec4={imsrc:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Toad-Original_RGB.png",title:"UI Development",tags:["Academic","Toad for Oracle","HCI"],time:"Apr 2018 - Aug 2018",description:"Developed a new UI fot TforO."},t.ecl={imsrc:"https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",title:"Web Development",tags:["Self-learning","React.js"],time:"Dec 2020 - Jan 2021",description:"Self-Learning Javascript, CSS, HTML, React.js."},t.ecs=[t.ec1,t.ec2,t.ec3,t.ec4,t.ecl],t.sec2={title:"Experience",content:Object(i.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"100%",backgroundColor:"black",padding:"0.5vmin"},children:t.ecs.map((function(t){return Object(i.jsx)(x,{imsrc:t.imsrc,title:t.title,tags:t.tags,time:t.time,description:t.description})}))}),pos:a.a.createRef()},t.sec3={title:"Special Thanks",content:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{login:"epicsteve2"}),Object(i.jsx)(h,{login:"JDong3"})]}),pos:a.a.createRef()},t.secs=[t.sec1,t.sec2,t.sec3],t.handlescroll=function(){var e=Math.floor(Math.max(window.scrollY-t.pos.current.offsetTop,0)/(t.pos.current.offsetHeight-window.innerHeight)*100);t.setState({progress:e})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{progress:this.state.progress+"%",secpos:this.state.secpos}),Object(i.jsx)("div",{className:"ContentContainer-container",children:Object(i.jsxs)("div",{className:"ContentContainer-content",children:[Object(i.jsx)("div",{ref:this.pos,children:this.secs.map((function(t){return Object(i.jsx)(g,{title:t.title,content:t.content,pos:t.pos})}))}),Object(i.jsx)(g,{}),Object(i.jsx)("div",{className:"footer",children:"Copyright (c) 2021 Simon Wang"})]})})]})}},{key:"componentDidMount",value:function(){var t=this,e=this.secs.map((function(e){return[e.title,e.pos,Math.floor(e.pos.current.offsetHeight/t.pos.current.offsetHeight*100)]}));this.setState({secpos:e}),this.handlescroll(),window.addEventListener("scroll",this.handlescroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlescroll)}}]),n}(a.a.Component),k=(n(56),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,error:null,show:""},t.data=null,t.dataimage=null,t.card=a.a.createRef(),t.goto_link=function(t){return function(){return window.open(t)}},t.handlevisible=function(){!t.show&&t.card.current.offsetTop+t.card.current.offsetHeight<window.scrollY+window.innerHeight&&t.card.current.offsetTop>window.scrollY?t.setState({show:"LandingCard-container-show"}):t.setState({show:""})},t.render_putin=function(){return t.state.loading?Object(i.jsx)("h1",{children:"Loading..."}):t.state.error?Object(i.jsx)("pre",{children:JSON.stringify(t.state.error,null,2)}):t.data?Object(i.jsxs)("div",{className:"LandingCard-maincontainer ",children:[Object(i.jsx)("img",{className:"LandingCard-profile-pic",alt:t.data.login,src:t.dataimage}),Object(i.jsxs)("div",{className:"LandingCard-profile-info",children:[Object(i.jsx)("h2",{children:t.data.name}),Object(i.jsx)("p",{children:t.data.login}),Object(i.jsx)("p",{children:t.data.location}),Object(i.jsx)("div",{className:"LandingCard-profile-info-bio",children:t.data.bio}),Object(i.jsxs)("div",{className:"LandingCard-icons",children:[Object(i.jsx)("div",{className:"LandingCard-github LandingCard-icon",onClick:t.goto_link(t.props.github)}),Object(i.jsx)("div",{className:"LandingCard-linkedin LandingCard-icon",onClick:t.goto_link(t.props.linkedin)}),Object(i.jsx)("div",{className:"LandingCard-resume",onClick:t.goto_link(t.props.resume),children:"Resume"})]})]})]}):null},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{ref:this.card,className:"LandingCard-container "+this.state.show,children:this.render_putin()})}},{key:"componentDidMount",value:function(){var t=this;this.props.login&&(this.setState({loading:!0}),fetch("https://api.github.com/users/".concat(this.props.login)).then((function(t){return t.json()})).then((function(e){t.data=e})).then((function(){return fetch(t.data.avatar_url).then((function(t){return t.blob()})).then((function(e){return t.dataimage=URL.createObjectURL(e)}))})).then((function(){return t.setState({loading:!1})})).catch((function(e){return t.setState({error:e})})),this.handlevisible(),window.addEventListener("scroll",this.handlevisible))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handlevisible)}}]),n}(a.a.Component)),_=(n(57),n(36)),S=n.n(_),C=(n(89),function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).tt=a.a.createRef(),t.state={height:"1em"},t.textchange=function(e){t.props.textchange(e),t.setState({height:"1em"})},t.submit=function(){t.props.submit()},t.entersubmit=function(e){"Enter"===e.key&&(e.preventDefault(),t.submit(),t.setState({height:"1em"}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"InputAtBottom-container",style:{display:this.props.display},children:[Object(i.jsx)("textarea",{ref:this.tt,style:{height:this.state.height},value:this.props.text,className:"InputAtBottom-text",onChange:this.textchange,onKeyPress:this.entersubmit}),Object(i.jsx)("div",{onClick:this.submit,children:"submit"})]})}},{key:"componentDidUpdate",value:function(){"1em"===this.state.height&&this.setState({height:this.tt.current.scrollHeight+"px"})}}]),n}(a.a.Component));a.a.Component;o.a.render(Object(i.jsxs)(a.a.StrictMode,{children:[Object(i.jsx)(k,{login:"mtwangyugeng",linkedin:"https://www.linkedin.com/in/yu-geng-wang-474553192/",github:"https://github.com/mtwangyugeng",resume:"https://raw.githubusercontent.com/mtwangyugeng/resume/master/Short_Resume.YuGeng.Wang.pdf"}),Object(i.jsx)("div",{children:Object(i.jsx)(y,{})})]}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.b685a77c.chunk.js.map