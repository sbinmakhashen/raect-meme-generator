(this["webpackJsonpcourse-capstone-meme-generator"]=this["webpackJsonpcourse-capstone-meme-generator"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(3),o=n.n(c),m=(n(13),n(0)),i=function(){return Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",{src:"https://i.gifer.com/45RU.gif",alt:"lol"}),Object(m.jsx)("h2",{children:"Meme Generator"})]})})},r=n(4),h=n(5),l=n(6),j=n(8),u=n(7),d=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={topTxt:"",bottomTxt:"",memeImg:"https://i.redd.it/iy0mnp8ofcu51.png",memeRandom:[]},t.handleChange=function(e){t.setState(Object(r.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=Math.floor(Math.random()*t.state.memeRandom.length),a=t.state.memeRandom[n].url;t.setState({memeImg:a})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.imgflip.com/get_memes").then((function(t){return t.json()})).then((function(e){t.setState({memeRandom:e.data.memes})}))}},{key:"render",value:function(){return console.log(this.state.memeRandom),Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",name:"topTxt",placeholder:"Top text",onChange:this.handleChange,value:this.state.topTxt}),Object(m.jsx)("input",{type:"text",name:"bottomTxt",placeholder:"Bottom text",onChange:this.handleChange,value:this.state.bottomTxt}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",className:"btn",children:"Generate"})})]}),Object(m.jsxs)("div",{className:"meme",children:[Object(m.jsx)("h2",{className:"top",children:this.state.topTxt}),Object(m.jsx)("h2",{className:"bottom",children:this.state.bottomTxt}),Object(m.jsx)("img",{src:this.state.memeImg,alt:""})]})]})}}]),n}(a.Component);var b=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(i,{}),Object(m.jsx)(d,{})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),s(t),c(t),o(t)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.a1775e20.chunk.js.map