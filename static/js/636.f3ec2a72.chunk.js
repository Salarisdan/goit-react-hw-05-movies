"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[636],{266:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(689),a=e(87),u=e(184),c=function(t){var n=t.movies,e=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})})}},636:function(t,n,e){e.r(n);var r=e(931),a=e(266),u=e(184);n.default=function(){var t=(0,r.t)().trendingMovies;return(0,u.jsx)("div",{children:(0,u.jsx)(a.O,{movies:t})})}},13:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return s},q5:function(){return p},zv:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="f864ef6a91b9e0820f1a60a4087912c5";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,e=n.data.results.map((function(t){return{id:t.id,title:t.title}})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},931:function(t,n,e){e.d(n,{t:function(){return s}});var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(13),o=e(791),s=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1];return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Hg();case 2:n=t.sent,u(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),{trendingMovies:e}}}}]);
//# sourceMappingURL=636.f3ec2a72.chunk.js.map