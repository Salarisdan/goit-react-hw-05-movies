"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{783:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(689),a=e(861),u=e(439),c=e(757),i=e.n(c),o=e(13),s=e(791),p=e(184),f=function(){var n=function(n){var t=(0,s.useState)([]),e=(0,u.Z)(t,2),r=e[0],c=e[1];return(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.q5(n);case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),{movieReviews:r}}((0,r.UO)().movieId),t=n.movieReviews;return(0,p.jsxs)("div",{children:[0===(null===t||void 0===t?void 0:t.length)&&(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}),(0,p.jsx)("ul",{children:t.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})]})}},13:function(n,t,e){e.d(t,{Hg:function(){return o},TP:function(){return s},q5:function(){return f},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="f864ef6a91b9e0820f1a60a4087912c5";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data.results.map((function(n){return{id:n.id,title:n.title}})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=266.f4c6faef.chunk.js.map