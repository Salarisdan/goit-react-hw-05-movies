"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[181],{515:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(689),a=e(861),c=e(439),u=e(757),i=e.n(u),o=e(281),s=e(791),p=e(184),f=function(){var t=function(t){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),r=e[0],u=e[1];return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.zv(t);case 2:e=n.sent,u(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),{movieCredits:r}}((0,r.UO)().movieId),n=t.isLoading,e=t.moviesCast;return n||e?(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:e.map((function(t){return(0,p.jsxs)("li",{children:[t.profile_path&&(0,p.jsx)("img",{width:100,src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(t.profile_path),alt:t.name}),(0,p.jsx)("p",{children:t.name}),(0,p.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}):null}},281:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return s},q5:function(){return f},zv:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="f864ef6a91b9e0820f1a60a4087912c5";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data.results.map((function(t){return{id:t.id,title:t.title}})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=181.ff68d17e.chunk.js.map