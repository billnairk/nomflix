(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noimage.4e5b46ed.jpeg"},73:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(38),c=n.n(i),o=n(19),s=n(5),l=n(10),d=n.n(l),u=n(13),p=n(14),j=n(15),b=n(17),h=n(16),g=n(39),x=n.n(g).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"a6bcd87dd7b6a4763bd8e5dac6e662fa",language:"en-US"}}),m=function(){return x.get("tv/top_rated")},v=function(){return x.get("tv/popular")},O=function(){return x.get("tv/airing_today")},f=function(e){return x.get("tv/".concat(e),{params:{append_to_response:"videos"}})},y=function(e){return x.get("search/tv",{params:{query:encodeURIComponent(e)}})};console.log(m());var _,w,k,S,T,R,M,U,z,C,N,I,F,P,A,B,D,L,V,q,J,E,H,G,K,Q,W,X,Y,Z,$,ee=function(){return x.get("movie/now_playing")},te=function(){return x.get("movie/upcoming")},ne=function(){return x.get("movie/popular")},re=function(e){return x.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ae=function(e){return x.get("search/movie",{params:{query:encodeURIComponent(e)}})},ie=n(3),ce=n(2),oe=n(0),se=ce.c.div(_||(_=Object(ie.a)(["\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),le=ce.c.span(w||(w=Object(ie.a)(["\n  font-size: 18px;\n  font-weight: 600;\n"]))),de=ce.c.div(k||(k=Object(ie.a)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),ue=function(e){var t=e.title,n=e.children;return Object(oe.jsxs)(se,{children:[Object(oe.jsx)(le,{children:t}),Object(oe.jsx)(de,{children:n})]})},pe=ce.c.div(S||(S=Object(ie.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n  margin-top: 50px;\n"]))),je=function(){return Object(oe.jsx)(pe,{children:Object(oe.jsx)("span",{role:"img","aria-label":"Loading",children:"Loading..."})})},be=ce.c.div(T||(T=Object(ie.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),he=ce.c.span(R||(R=Object(ie.a)(["\n  color: ",";\n  font-weight: 600;\n"])),(function(e){return e.color})),ge=function(e){var t=e.text,n=e.color;return Object(oe.jsx)(be,{children:Object(oe.jsx)(he,{color:n,children:t})})},xe=ce.c.div(M||(M=Object(ie.a)(["\n  font-size: 12px;\n"]))),me=ce.c.div(U||(U=Object(ie.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.3s linear; ;;;\n"])),(function(e){return e.bgUrl})),ve=ce.c.span(z||(z=Object(ie.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n"]))),Oe=ce.c.div(C||(C=Object(ie.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),me,ve),fe=ce.c.span(N||(N=Object(ie.a)(["\n  display: block;\n  margin-bottom: 3px;\n  line-height: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n"]))),ye=ce.c.span(I||(I=Object(ie.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),_e=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,s=e.isMovie,l=void 0!==s&&s;return Object(oe.jsx)(o.b,{to:l?"/movie/".concat(t):"/show/".concat(t),children:Object(oe.jsxs)(xe,{children:[Object(oe.jsxs)(Oe,{children:[Object(oe.jsx)(me,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(37).default}),Object(oe.jsxs)(ve,{children:[Object(oe.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"})," ",i,"/10"]})]}),Object(oe.jsx)(fe,{children:a.length>20?"".concat(a.substring(0,15),"..."):a}),Object(oe.jsx)(ye,{children:c})]})})},we=n(12),ke=ce.c.div(F||(F=Object(ie.a)(["\n  padding: 20px 20px;\n"]))),Se=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.loading,i=e.error;return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(we.a,{children:Object(oe.jsx)("title",{children:"Movies | Nomflix"})}),a?Object(oe.jsx)(je,{}):Object(oe.jsxs)(ke,{children:[t&&t.length>0&&Object(oe.jsx)(ue,{title:"Now Playing",children:t.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(oe.jsx)(ue,{title:"Upcoming Movies",children:n.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(oe.jsx)(ue,{title:"Popular Movies",children:r.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:void 0==e.release_date?"":e.release_date.substring(0,4),isMovie:!0},e.id)}))}),i&&Object(oe.jsx)(ge,{color:"#e74c3c",text:i})]}),";"]})},Te=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,r,a,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee();case 3:return t=e.sent,n=t.data.results,e.next=7,te();case 7:return r=e.sent,a=r.data.results,e.next=11,ne();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upcoming:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(oe.jsx)(Se,{nowPlaying:t,upcoming:n,popular:r,loading:i,error:a})}}]),n}(a.a.Component),Re=ce.c.div(P||(P=Object(ie.a)(["\n  padding: 20px 20px;\n"]))),Me=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(we.a,{children:Object(oe.jsx)("title",{children:"TV | Nomflix"})}),a?Object(oe.jsx)(je,{}):Object(oe.jsxs)(Re,{children:[t&&t.length>0&&Object(oe.jsx)(ue,{title:"Top Rated Shows",children:t.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(oe.jsx)(ue,{title:"Popular Shows",children:n.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(oe.jsx)(ue,{title:"Airing Today",children:r.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(oe.jsx)(ge,{color:"#e74c3c",text:i})]})]})},Ue=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,r,a,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:return t=e.sent,n=t.data.results,e.next=7,v();case 7:return r=e.sent,a=r.data.results,e.next=11,O();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(oe.jsx)(Me,{topRated:t,popular:n,airingToday:r,loading:a,error:i})}}]),n}(a.a.Component),ze=ce.c.div(A||(A=Object(ie.a)(["\n  padding: 20px 20px;\n"]))),Ce=ce.c.form(B||(B=Object(ie.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Ne=ce.c.input(D||(D=Object(ie.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Ie=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.error,i=e.searchTerm,c=e.handleSubmit,o=e.updateTerm;return Object(oe.jsxs)(ze,{children:[Object(oe.jsx)(we.a,{children:Object(oe.jsx)("title",{children:"Search | Nomflix"})}),Object(oe.jsx)(Ce,{onSubmit:c,children:Object(oe.jsx)(Ne,{placeholder:"Search Movies or TV Shows...",type:"text",value:i,onChange:o})}),r?Object(oe.jsx)(je,{}):Object(oe.jsxs)(oe.Fragment,{children:[t&&t.length>0&&Object(oe.jsx)(ue,{title:"Movie Results",children:t.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(oe.jsx)(ue,{title:"TV Results",children:n.map((function(e){return Object(oe.jsx)(_e,{id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))})]}),a&&Object(oe.jsx)(ge,{color:"#e74c3c",text:a}),n&&t&&0===n.length&&0===t.length&&Object(oe.jsx)(ge,{text:"Nothing Found",color:"#95a5a6"})]})},Fe=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(u.a)(d.a.mark((function t(){var n,r,a,i,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,e.setState({loading:!0}),t.next=5,ae(n);case 5:return r=t.sent,a=r.data.results,t.next=9,y(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])}))),e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(oe.jsx)(Ie,{movieResults:t,tvResults:n,loading:a,error:i,searchTerm:r,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(a.a.Component),Pe=ce.c.header(L||(L=Object(ie.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Ae=ce.c.ul(V||(V=Object(ie.a)(["\n  display: flex;\n"]))),Be=ce.c.li(q||(q=Object(ie.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),De=Object(ce.c)(o.b)(J||(J=Object(ie.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Le=Object(s.g)((function(e){var t=e.location.pathname;return Object(oe.jsx)(Pe,{children:Object(oe.jsxs)(Ae,{children:[Object(oe.jsx)(Be,{current:"/"===t,children:Object(oe.jsx)(De,{to:"/",children:"Movies"})}),Object(oe.jsx)(Be,{current:"/tv"===t,children:Object(oe.jsx)(De,{to:"/tv",children:"Tv"})}),Object(oe.jsx)(Be,{current:"/search"===t,children:Object(oe.jsx)(De,{to:"/search",children:"Search"})})]})})})),Ve=ce.c.div(E||(E=Object(ie.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),qe=ce.c.div(H||(H=Object(ie.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Je=ce.c.div(G||(G=Object(ie.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Ee=ce.c.div(K||(K=Object(ie.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),He=ce.c.div(Q||(Q=Object(ie.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]))),Ge=ce.c.h3(W||(W=Object(ie.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]))),Ke=ce.c.div(X||(X=Object(ie.a)(["\n  margin: 20px 0px;\n"]))),Qe=ce.c.span(Y||(Y=Object(ie.a)([""]))),We=ce.c.span(Z||(Z=Object(ie.a)(["\n  margin: 0px 10px;\n"]))),Xe=ce.c.p($||($=Object(ie.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]))),Ye=function(e){var t=e.result,r=e.loading;e.error;return r?Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(we.a,{children:Object(oe.jsx)("title",{children:"Loading | Nomfilx"})}),Object(oe.jsx)(je,{})]}):Object(oe.jsxs)(Ve,{children:[Object(oe.jsx)(we.a,{children:Object(oe.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," ","| Nomfilx"]})}),Object(oe.jsx)(qe,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(oe.jsxs)(Je,{children:[Object(oe.jsx)(Ee,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(37).default}),Object(oe.jsxs)(He,{children:[Object(oe.jsx)(Ge,{children:t.original_title?t.original_title:t.original_name}),Object(oe.jsxs)(Ke,{children:[Object(oe.jsx)(Qe,{children:void 0===t.release_date?"":void 0!==t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(oe.jsx)(We,{children:"\xb7"}),Object(oe.jsxs)(Qe,{children:[t.runtime?t.runtime:t.episode_run_time," min"]}),Object(oe.jsx)(We,{children:"\xb7"}),Object(oe.jsx)(Qe,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(oe.jsx)(Xe,{children:t.overview})]})]})]})},Ze=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(p.a)(this,n);var a=e.location.pathname;return(r=t.call(this,e)).state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,r,a,i,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,re(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,f(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(oe.jsx)(Ye,{result:t,loading:r,error:n})}}]),n}(a.a.Component);var $e,et=function(){return Object(oe.jsx)(o.a,{children:Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(Le,{}),Object(oe.jsxs)(s.d,{children:[Object(oe.jsx)(s.b,{path:"/",exact:!0,component:Te}),Object(oe.jsx)(s.b,{path:"/tv",exact:!0,component:Ue}),Object(oe.jsx)(s.b,{path:"/search",component:Fe}),Object(oe.jsx)(s.b,{path:"/movie/:id",component:Ze}),Object(oe.jsx)(s.b,{path:"/show/:id",component:Ze}),Object(oe.jsx)(s.a,{from:"*",to:"/"})]})]})})},tt=n(45),nt=Object(ce.a)($e||($e=Object(ie.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  *{\n    box-sizing: border-box;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    background-color: rgba(20, 20, 20, 1);\n    color: white;\n    padding-top: 50px;\n    color: white;\n  }\n"])),tt.a);var rt=function(){return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(nt,{}),Object(oe.jsx)(et,{})]})};c.a.render(Object(oe.jsx)(a.a.StrictMode,{children:Object(oe.jsx)(rt,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.35ce2bb3.chunk.js.map