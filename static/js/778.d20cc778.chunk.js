"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[778],{778:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(87),a=n(689),i=n(861),c=n(439),u=n(757),s=n.n(u),o=n(281),p=n(791),d=n(184),f=function(){var e,t,n,u=function(e){var t=(0,p.useState)(""),n=(0,c.Z)(t,2),r=n[0],a=n[1];return(0,p.useEffect)((function(){function t(){return(t=(0,i.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.TP(e);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{movieDetails:r}}((0,a.UO)().movieId),f=u.movieDetails,l=u.isLoading,v=null!==(e=null===(t=(0,a.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,d.jsxs)("div",{children:[(0,d.jsx)(r.rU,{to:v,children:(0,d.jsx)("button",{type:"button",children:"Go back"})}),l?(0,d.jsx)("p",{children:"Loading..."}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h2",{children:[f.title," (",f.release_date?f.release_date.substring(0,4):"",")"]}),(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(f.poster_path),alt:f.original_title}),(0,d.jsxs)("p",{children:["User Score: ",f.vote_average?Math.fround(10*f.vote_average).toFixed(0)+"%":""]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:null===(n=f.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(" ")}),(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(r.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(r.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(a.j3,{})]})]})}},281:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return p},q5:function(){return f},z1:function(){return o},zv:function(){return d}});var r=n(861),a=n(757),i=n.n(a),c=n(243),u="f864ef6a91b9e0820f1a60a4087912c5";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,n=t.data.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=778.d20cc778.chunk.js.map