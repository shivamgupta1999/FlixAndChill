(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(1),o=a.n(s),i=a(5),m=a(2);function u(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),u=s[0],p=s[1],h=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=a2b0e6652cade8cab83423a2871d1073&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,p(c.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:h},r.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"Enter a movie i.e. Dark Knight",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Search")),r.a.createElement("div",{className:"card-list"},u.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+" poster"}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},e.title),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",e.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",e.vote_average)),r.a.createElement("p",{className:"card--desc"},e.overview)))}))))}var p=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"brand"},"Flix & Chill"),r.a.createElement(u,null),r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://shivamgupta1999.github.io/MyCV/"},"Shivam Gupta")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.bbd4b128.chunk.js.map