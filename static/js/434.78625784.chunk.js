"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[434],{434:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(689),a=e(861),u=e(439),c=e(757),i=e.n(c),o=e(281),s=e(791),p=e(184),f=function(){var t=function(t){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),r=e[0],c=e[1];return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.q5(t);case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),{movieReviews:r}}((0,r.UO)().movieId),n=t.movieReviews;return(0,p.jsxs)("div",{children:[0===(null===n||void 0===n?void 0:n.length)&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}),(0,p.jsx)("ul",{children:n.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",t.author]}),(0,p.jsx)("p",{children:t.content})]},t.id)}))})]})}},281:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return p},q5:function(){return v},z1:function(){return s},zv:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="f864ef6a91b9e0820f1a60a4087912c5";c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/550?api_key=f864ef6a91b9e0820f1a60a4087912c5";var o=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data.results.map((function(t){return{id:t.id,title:t.title}})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data.results.map((function(t){return{id:t.id,title:t.title}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=434.78625784.chunk.js.map