(this["webpackJsonpglx-trvl"]=this["webpackJsonpglx-trvl"]||[]).push([[0],{18:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(21),a=c.n(i),j=(c(26),c(3)),r=(c(27),c(13)),l=c(0),d=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsxs)("div",{className:"location",children:[Object(l.jsx)(r.d,{size:20,style:{color:"#ffffff",marginRight:"2rem"}}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Chandigarh University"}),Object(l.jsx)("h4",{children:"Mohali,Punjab"})]})]}),Object(l.jsx)("div",{className:"phone",children:Object(l.jsxs)("h4",{children:[Object(l.jsx)(r.c,{size:20,style:{color:"#ffffff",marginRight:"2rem"}})," 123-456-7890"]})}),Object(l.jsx)("div",{className:"email",children:Object(l.jsxs)("h4",{children:[Object(l.jsx)(r.b,{size:20,style:{color:"#ffffff",marginRight:"2rem"}})," Astroids@temp.com"]})})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h4",{children:"About the company"}),Object(l.jsx)("p",{children:'Our team "Asteroids" has developed an interactive gateway as a web application.'})]})]})})},o=c(7),b=c(8),h=c(9),O=c(10),x=(c(29),function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"hero-img",children:Object(l.jsxs)("div",{className:"heading",children:[Object(l.jsx)("h1",{children:this.props.heading}),Object(l.jsx)("p",{children:this.props.text})]})})}}]),c}(s.Component)),u=x,m=c(5),p=c(6),f=(c(30),function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(!1),a=Object(m.a)(i,2),j=a[0],d=a[1];return window.addEventListener("scroll",(function(){window.scrollY>=100?d(!0):d(!1)})),Object(l.jsxs)("div",{className:j?"header header-bg":"header",children:[Object(l.jsx)(p.b,{to:"/",children:Object(l.jsx)("h1",{children:"Asteroids"})}),Object(l.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/pricing",children:"All Resources"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/begineer",children:"Beginner Resources"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/intermediate",children:"Intermediate Resources"})}),Object(l.jsx)("li",{children:Object(l.jsx)(p.b,{to:"/advanced",children:"Advanced Resources"})})]}),Object(l.jsx)("div",{className:"hamburger",onClick:function(){return n(!c)},children:c?Object(l.jsx)(r.e,{size:20,style:{color:"#fff"}}):Object(l.jsx)(r.a,{size:20,style:{color:"#fff"}})})]})}),v=(c(32),function(){return Object(l.jsx)("div",{className:"form",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"Your Name"}),Object(l.jsx)("input",{type:"text"}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email"}),Object(l.jsx)("label",{children:"Subject"}),Object(l.jsx)("input",{type:"text"}),Object(l.jsx)("label",{children:"Details"}),Object(l.jsx)("textarea",{rows:"6",placeholder:"Type a short message here"}),Object(l.jsx)("button",{className:"btn",children:"Submit"})]})})}),g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(u,{heading:"CONTACT.",text:"Contact GLX Travel"}),Object(l.jsx)(v,{}),Object(l.jsx)(d,{})]})},N=(c(33),c.p+"static/media/space.41584ed5.mp4"),y=function(){return Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,id:"video",children:Object(l.jsx)("source",{src:N,type:"video/mp4"})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{children:"Explore Space"}),Object(l.jsx)("p",{children:'Different paths one destination "Space"'}),Object(l.jsx)("div",{children:Object(l.jsx)(p.b,{to:"/pricing",className:"btn",children:"Training"})})]}),Object(l.jsx)("iframe",{className:"chat",width:"350",height:"430",allow:"microphone;",src:"https://console.dialogflow.com/api-client/demo/embedded/a8bcda60-e993-414e-9010-04ec01e8260f"})]})},D=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(y,{}),Object(l.jsx)(d,{})]})},k=(c(18),function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={items:{},DataisLoaded:!1},s}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nasa-space-app-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(t){e.setState({items:t.Data,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(l.jsx)("div",{className:"pricing",children:Object(l.jsx)("div",{className:"card-container",children:c.map((function(e){return Object(l.jsx)("ol",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("p",{className:"btc",children:[" ",e.Title]}),Object(l.jsx)("p",{children:e.Theme}),Object(l.jsx)("a",{href:e.Link,className:"btn",children:"Course"})]})},e.id)}))})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:" Pleses wait some time.... "})," "]})}}]),c}(n.a.Component)),T=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(u,{heading:"All Courses",text:"Choose your course."}),Object(l.jsx)(k,{}),Object(l.jsx)(d,{})]})},L=(c(34),c.p+"static/media/pod.30776f82.jpg"),w=c.p+"static/media/moon.91396c73.jpg",C=function(){return Object(l.jsxs)("div",{className:"training",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("h1",{children:"Training"}),Object(l.jsx)("p",{children:"Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios."}),Object(l.jsx)(p.b,{to:"/contact",children:Object(l.jsx)("button",{className:"btn",children:"Contact"})})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"img-container",children:[Object(l.jsx)("div",{className:"image-stack top",children:Object(l.jsx)("img",{src:w,className:"img",alt:""})}),Object(l.jsx)("div",{className:"image-stack bottom",children:Object(l.jsx)("img",{src:L,className:"img",alt:""})})]})})]})},A=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(u,{heading:"TRAINING.",text:"Pre-Flight & In-Flight Training."}),Object(l.jsx)(C,{}),Object(l.jsx)(d,{})]})},R=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={items:{},DataisLoaded:!1},s}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nasa-space-app-api.herokuapp.com/filter?level=Introductory").then((function(e){return e.json()})).then((function(t){e.setState({items:t.Data,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(l.jsx)("div",{className:"pricing",children:Object(l.jsx)("div",{className:"card-container",children:c.map((function(e){return Object(l.jsx)("ol",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("p",{className:"btc",children:[" ",e.Title]}),Object(l.jsx)("p",{children:e.Theme}),Object(l.jsx)("a",{href:e.Link,className:"btn",children:"Course"})]})},e.id)}))})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:" Pleses wait some time.... "})," "]})}}]),c}(n.a.Component),I=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(u,{heading:"BEGINNER.",text:"Begineeer Resources"}),Object(l.jsx)(R,{}),Object(l.jsx)(d,{})]})},S=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={items:{},DataisLoaded:!1},s}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nasa-space-app-api.herokuapp.com/filter?level=Intermediate").then((function(e){return e.json()})).then((function(t){e.setState({items:t.Data,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(l.jsx)("div",{className:"pricing",children:Object(l.jsx)("div",{className:"card-container",children:c.map((function(e){return Object(l.jsx)("ol",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("p",{className:"btc",children:[" Title:",e.Title]}),Object(l.jsx)("p",{children:e.Theme}),Object(l.jsx)("a",{href:e.Link,className:"btn",children:"Course"})]})},e.id)}))})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:" Pleses wait some time.... "})," "]})}}]),c}(n.a.Component),E=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(u,{heading:"INTERMEDIATE.",text:"Intermediate Resources"}),Object(l.jsx)(S,{}),Object(l.jsx)(d,{})]})},P=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={items:{},DataisLoaded:!1},s}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nasa-space-app-api.herokuapp.com/filter?level=Advanced").then((function(e){return e.json()})).then((function(t){e.setState({items:t.Data,DataisLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.DataisLoaded,c=e.items;return t?Object(l.jsx)("div",{className:"pricing",children:Object(l.jsx)("div",{className:"card-container",children:c.map((function(e){return Object(l.jsx)("ol",{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("p",{className:"btc",children:e.Title}),Object(l.jsx)("p",{children:e.Theme}),Object(l.jsx)("a",{href:e.Link,className:"btn",children:"Course"})]})},e.id)}))})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:" Pleses wait some time.... "})," "]})}}]),c}(n.a.Component),M=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsx)(u,{heading:"Advanced.",text:"Advanced Resources"}),Object(l.jsx)(P,{}),Object(l.jsx)(d,{})]})};var z=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/NasaAppFrontend",element:Object(l.jsx)(D,{})}),Object(l.jsx)(j.a,{path:"/pricing",element:Object(l.jsx)(T,{})}),Object(l.jsx)(j.a,{path:"/begineer",element:Object(l.jsx)(I,{})}),Object(l.jsx)(j.a,{path:"/intermediate",element:Object(l.jsx)(E,{})}),Object(l.jsx)(j.a,{path:"/advanced",element:Object(l.jsx)(M,{})}),Object(l.jsx)(j.a,{path:"/training",element:Object(l.jsx)(A,{})}),Object(l.jsx)(j.a,{path:"/contact",element:Object(l.jsx)(g,{})})]})})};a.a.render(Object(l.jsx)(p.a,{children:Object(l.jsx)(z,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ae1c39d9.chunk.js.map