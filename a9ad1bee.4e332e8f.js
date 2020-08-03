(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{163:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return p}));var a=o(2),r=o(6),n=(o(0),o(219)),i={id:"level-350",title:"Level 350",sidebar_label:"Level 350"},s={unversionedId:"js-core-3/tv-show-dom-project/level-350",id:"js-core-3/tv-show-dom-project/level-350",isDocsHomePage:!1,title:"Level 350",description:"Switch to fetching live data!",source:"@site/docs/js-core-3/tv-show-dom-project/level-350.md",permalink:"/js-core-3/tv-show-dom-project/level-350",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/tv-show-dom-project/level-350.md",sidebar_label:"Level 350",sidebar:"JavaScriptCore3",previous:{title:"Level 300",permalink:"/js-core-3/tv-show-dom-project/level-300"},next:{title:"Level 400",permalink:"/js-core-3/tv-show-dom-project/level-400"}},c=[{value:"Switch to fetching <em>live</em> data!",id:"switch-to-fetching-live-data",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Note on fetching the list of episodes",id:"note-on-fetching-the-list-of-episodes",children:[]},{value:"Learn about the API from its documentation",id:"learn-about-the-api-from-its-documentation",children:[]},{value:"Loading a different show - just for fun",id:"loading-a-different-show---just-for-fun",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"switch-to-fetching-live-data"},"Switch to fetching ",Object(n.b)("em",{parentName:"h2"},"live")," data!"),Object(n.b)("p",null,"(This is a short level to help you transition to using live data.)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Pre-req"),": For this level you will have to have learned to use fetch() to ",Object(n.b)("inlineCode",{parentName:"p"},"GET")," JSON content from an API."),Object(n.b)("h3",{id:"requirements"},"Requirements"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Complete all requirements from level 300"),Object(n.b)("li",{parentName:"ol"},"When your page loads, it must load the episodes (for the SAME show) from TVMaze API, using ",Object(n.b)("inlineCode",{parentName:"li"},"fetch"),", NOT from the provided ",Object(n.b)("inlineCode",{parentName:"li"},"getAllEpisodes"),' function. (See below for the API "endpoint" (URL) to fetch.)'),Object(n.b)("li",{parentName:"ol"},"Your search and episode selector must continue to work as specified in level 300."),Object(n.b)("li",{parentName:"ol"},"Your page MUST NOT re-fetch the episodes every time the user types a character into your search field!")),Object(n.b)("h3",{id:"note-on-fetching-the-list-of-episodes"},"Note on fetching the list of episodes"),Object(n.b)("p",null,"To get the episodes for the Game of Thrones TV show, you would make a GET request for this URL: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://api.tvmaze.com/shows/82/episodes"}),"https://api.tvmaze.com/shows/82/episodes"),", using fetch."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Try that link in the browser. It just returns a plain text file, containing JSON.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Notice the structure. Is the top level an array? An object?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You ",Object(n.b)("strong",{parentName:"p"},"should")," notice that the JSON returned is exactly what was originally provided for you by the function in ",Object(n.b)("inlineCode",{parentName:"p"},"episodes.js"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Now you are seeing where we originally obtained the data from!"))),Object(n.b)("h3",{id:"learn-about-the-api-from-its-documentation"},"Learn about the API from its documentation"),Object(n.b)("p",null,"You can see that this endpoint has been documented here: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.tvmaze.com/api#show-episode-list"}),"https://www.tvmaze.com/api#show-episode-list")),Object(n.b)("h3",{id:"loading-a-different-show---just-for-fun"},"Loading a different show - just for fun"),Object(n.b)("p",null,"From the documentation above you can see that the show id is mentioned in the URL."),Object(n.b)("p",null,"Try changing that number and obtaining an episode list for other tv shows."),Object(n.b)("p",null,"Examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/82/episodes"}),"https://api.tvmaze.com/shows/82/episodes")," - Game Of Thrones"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/527/episodes"}),"https://api.tvmaze.com/shows/527/episodes")," - The Sopranos"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/22036/episodes"}),"https://api.tvmaze.com/shows/22036/episodes")," - Planet Earth II"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/5/episodes"}),"https://api.tvmaze.com/shows/5/episodes")," - True Detective"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/582/episodes"}),"https://api.tvmaze.com/shows/582/episodes")," - Fresh Prince"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/179/episodes"}),"https://api.tvmaze.com/shows/179/episodes")," - The Wire"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/379/episodes"}),"https://api.tvmaze.com/shows/379/episodes")," - Mythbusters"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tvmaze.com/shows/4729/episodes"}),"https://api.tvmaze.com/shows/4729/episodes")," - Scrapheap Challenge")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/level-300"}),"<< level 300")," - ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/readme"}),"top")," - ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/level-400"}),"level 400 >>")))}p.isMDXComponent=!0},219:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return u}));var a=o(0),r=o.n(a);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(o),m=a,u=b["".concat(i,".").concat(m)]||b[m]||h[m]||n;return o?r.a.createElement(u,s(s({ref:t},l),{},{components:o})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);