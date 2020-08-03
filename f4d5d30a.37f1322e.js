(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(219)),l={id:"coding-standards",title:"Coding Standard",sidebar_label:"Coding Standards"},c={unversionedId:"guides/coding-standards",id:"guides/coding-standards",isDocsHomePage:!1,title:"Coding Standard",description:"General",source:"@site/docs/guides/coding-standards.md",permalink:"/guides/coding-standards",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/guides/coding-standards.md",sidebar_label:"Coding Standards"},o=[{value:"General",id:"general",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"CSS",id:"css",children:[]},{value:"Git",id:"git",children:[]}],b={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Indentation should be consistent"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"I.e. all files should use either tabs or spaces and the same width (e.g. 4\ncharacters)"),Object(i.b)("li",{parentName:"ul"},"Do not mix tabs and spaces"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use one casing style"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Usually:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"camelCase for JavaScript"),Object(i.b)("li",{parentName:"ul"},"hyphen-case or camelCase for CSS"))),Object(i.b)("li",{parentName:"ul"},"Do not mix casing styles e.g. let first_name = person.firstName;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Test coverage should be sufficient"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This should meet or exceed the configured threshold; if this isn't possible,\nexplain why"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Comment code that might be difficult to understand..."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"...but also consider simplifying complex code if at all possible. If you\nfind that you're writing a lot of comments, then it's a good indicator that\nyour code is too verbose and potentially overengineered")))),Object(i.b)("h2",{id:"javascript"},"JavaScript"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Variable and function names should be descriptive"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g. ",Object(i.b)("inlineCode",{parentName:"li"},"const actors = getActorsFromFilm(film);")," is easier to understand than\n",Object(i.b)("inlineCode",{parentName:"li"},"const temp2 = doStuff(temp);")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Keep functions as short as possible"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If a function is longer than 15 lines, consider breaking it down into\nsmaller functions"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use variables if a literal value is repeated more than once"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g. ",Object(i.b)("inlineCode",{parentName:"li"},"console.log('Peter', 'Peter'.length);")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"const name = 'Peter'; console.log(name, name.length);"))))),Object(i.b)("h2",{id:"css"},"CSS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Styles should be based upon class selectors where possible e.g. ",Object(i.b)("inlineCode",{parentName:"p"},".some-class")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Facilitates reuse"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Don't")," use ID-based selectors e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"#some-id"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Avoid styling HTML element selectors directly, unless it's to remove default\nbrowser styling")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Avoid using style properties in JavaScript"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g. ",Object(i.b)("inlineCode",{parentName:"li"},"myElement.style.display = 'none';")),Object(i.b)("li",{parentName:"ul"},"This results in styles that are difficult to reuse"),Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("inlineCode",{parentName:"li"},"Element.prototype.classList")," instead e.g.\n",Object(i.b)("inlineCode",{parentName:"li"},"myElement.classList.add('hidden');"))))),Object(i.b)("h2",{id:"git"},"Git"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make small, frequent commits"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If you make a mistake, then it's easier to revert than if you only make\nlarge, occasional commits"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Avoid committing commented-out code"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the code exists in a previous commit, then use GitHub or ",Object(i.b)("inlineCode",{parentName:"li"},"git diff")," to\nview it")))))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);