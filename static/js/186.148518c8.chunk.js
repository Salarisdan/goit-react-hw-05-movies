"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(87),a=t(689),i=t(861),c=t(439),u=t(757),o=t.n(u),s=t(13),d=t(791),l=t(184),p=function(){var e,n,t,u,p,f=(0,a.UO)().movieId,v=function(e){var n=(0,d.useState)(""),t=(0,c.Z)(n,2),r=t[0],a=t[1];return(0,d.useEffect)((function(){function n(){return(n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.TP(e);case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),{movieDetails:r}}(f),h=v.movieDetails,x=v.isLoading,g=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return x?(0,l.jsx)("div",{children:"Loading..."}):(0,l.jsxs)("div",{children:[(0,l.jsx)(r.rU,{to:g,children:(0,l.jsx)("button",{type:"button",children:"Go back"})}),(0,l.jsxs)("h2",{children:[h.title," (",null!==(t=null===(u=h.release_date)||void 0===u?void 0:u.substring(0,4))&&void 0!==t?t:"",")"]}),(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(h.poster_path),alt:h.original_title}),(0,l.jsxs)("p",{children:["User Score:"," ",h.vote_average?Math.fround(10*h.vote_average).toFixed(0):"","%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:h.overview}),(0,l.jsx)("h4",{children:"Genres"}),(0,l.jsx)("p",{children:null===(p=h.genres)||void 0===p?void 0:p.map((function(e){return e.name})).join(" ")}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.rU,{to:"".concat(f,"/cast"),children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.rU,{to:"".concat(f,"/reviews"),children:"Reviews"})})]}),(0,l.jsx)(d.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(a.j3,{})})]})}},13:function(e,n,t){t.d(n,{Hg:function(){return o},TP:function(){return s},q5:function(){return l},zv:function(){return d}});var r=t(861),a=t(757),i=t.n(a),c=t(243),u="f864ef6a91b9e0820f1a60a4087912c5";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return n=e.sent,t=n.data.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,r=t.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.148518c8.chunk.js.map