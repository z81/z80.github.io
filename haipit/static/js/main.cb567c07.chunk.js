(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(56)},35:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=a(12),i=(a(35),a(5)),l=a(6),u=a(8),p=a(7),m=a(9),h=(a(37),a(10)),g=a(16),d=a.n(g),f=a(23),v="SET_POSTS",b="SET_POSTS_LOADER";function E(e){return function(){var t=Object(f.a)(d.a.mark(function t(a,n,r){var c,o,s,i,l,u,p,m;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.API_PATH,t.prev=1,a({type:b}),t.next=5,fetch("".concat(c,"news?page=").concat(e));case 5:return o=t.sent,t.next=8,o.json();case 8:s=t.sent,i=s.data,l=s.total,u=s.per_page,p=s.current_page,m=s.last_page,a({type:v,payload:{posts:i,totalPages:l,currentPage:p,newsPerPage:u,lastPage:m}}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.error(t.t0);case 20:case"end":return t.stop()}},t,this,[[1,17]])}));return function(e,a,n){return t.apply(this,arguments)}}()}var P=a(17),O=a(11),y=(a(46),a(24)),j=function(e){return r.a.createElement(y.a,Object.assign({height:300,width:300,speed:2,primaryColor:"#1a1f2d",secondaryColor:"#2a2f3d"},e),r.a.createElement("rect",{x:"0",y:"0",width:"300",height:"30"}),r.a.createElement("rect",{x:"0",y:"35",width:"300",height:"230"}),r.a.createElement("rect",{x:"0",y:"270",width:"70",height:"30"}),r.a.createElement("rect",{x:"75",y:"270",width:"40",height:"30"}),r.a.createElement("rect",{x:"120",y:"270",width:"180",height:"30"}))},w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.title,n=e.description,c=e.timestamp,o=e.clicks_count,s=e.source,i=e.link;if(t)return r.a.createElement(j,{className:"post"});var l=P.DateTime.fromMillis(1e3*c).toLocaleString(P.DateTime.DATE_MED);return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"header"},r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},a)),r.a.createElement("div",{className:"content"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-bottom"},r.a.createElement("div",{className:"datetime"},r.a.createElement(O.a,null)," ",l),r.a.createElement("div",{className:"views"},r.a.createElement(O.b,null)," ",o),"by @",r.a.createElement("div",{className:"source-name"},r.a.createElement("a",{href:s.link,target:"_blank",rel:"noopener noreferrer"},s.title)))))}}]),t}(n.Component),k=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.routeParams;this.props.routeParams.id===t.id&&0!==this.props.posts.length||this.props.goToPage(+t.id)}},{key:"renderPosts",value:function(){return this.props.posts.map(function(e){return r.a.createElement(w,Object.assign({key:e.id},e))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"posts-wrapper"},r.a.createElement("div",{className:"posts"},this.renderPosts()))}}]),t}(r.a.Component)),N=Object(h.b)(function(e){return{posts:e.posts,currentPage:e.currentPage}},function(e){return{goToPage:function(t){return e(E(t))}}})(k),T=a(25),_=a.n(T),x=a(59),C=(a(53),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).goToPage=function(e){var t=e.selected;return a.props.history.push("/page/".concat(t+1))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.routeParams,a=e.lastPage;return r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"logo"}),r.a.createElement("div",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement("div",{className:"pages"},r.a.createElement(_.a,{previousLabel:r.a.createElement(O.c,{size:16}),nextLabel:r.a.createElement(O.d,{size:16}),breakLabel:"...",breakClassName:"break-me",pageCount:a,initialPage:t.id-1,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.goToPage,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),t}(n.Component)),A=Object(x.a)(C),L=Object(h.b)(function(e){return{totalPages:e.totalPages,currentPage:e.currentPage,newsPerPage:e.newsPerPage,lastPage:e.lastPage}},function(e){return{goToPage:function(t){return e(E(t))}}})(A),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(L,{routeParams:this.props.match.params}),r.a.createElement(N,{routeParams:this.props.match.params}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(28),I=a(18),H=[1,2,3,4,5,6].map(function(e){return{id:e,isLoading:!0}}),M={posts:[],currentPage:1};var R=a(58),W=a(57),z=Object(s.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object(I.a)({},e,t.payload);case b:return Object(I.a)({},e,{posts:H});default:return e}},Object(s.a)(D.a.withExtraArgument({API_PATH:"https://api.haipit.news/api/v2/"}))),B=document.getElementById("root");B&&o.a.render(r.a.createElement(h.a,{store:z},r.a.createElement(R.a,null,r.a.createElement("div",null,r.a.createElement(W.a,{path:"/page/:id",component:S}),r.a.createElement(W.a,{exact:!0,path:"/",component:S})))),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.cb567c07.chunk.js.map