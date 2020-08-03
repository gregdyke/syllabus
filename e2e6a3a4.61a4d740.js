(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(219)),c={id:"learning-objectives",title:"Learning Objectives",sidebar_label:"Learning Objectives"},o={unversionedId:"react/week-1/learning-objectives",id:"react/week-1/learning-objectives",isDocsHomePage:!1,title:"Learning Objectives",description:"React Week 1",source:"@site/docs/react/week-1/learning-objectives.md",permalink:"/react/week-1/learning-objectives",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/week-1/learning-objectives.md",sidebar_label:"Learning Objectives",sidebar:"React",previous:{title:"React Cheatsheet",permalink:"/guides/react-cheatsheet"},next:{title:"React - Week 1",permalink:"/react/week-1/lesson"}},l=[{value:"React Week 1",id:"react-week-1",children:[{value:"Creating an app",id:"creating-an-app",children:[]},{value:"Writing components",id:"writing-components",children:[]},{value:"Passing props",id:"passing-props",children:[]},{value:"Deployment",id:"deployment",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"react-week-1"},"React Week 1"),Object(i.b)("h3",{id:"creating-an-app"},"Creating an app"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a React application with create-react-app")),Object(i.b)("h3",{id:"writing-components"},"Writing components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a React function component"),Object(i.b)("li",{parentName:"ul"},"Nest components within other components"),Object(i.b)("li",{parentName:"ul"},"Use interpolation (",Object(i.b)("inlineCode",{parentName:"li"},"{}"),") to insert JavaScript expressions into JSX",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"And be able to distinguish between them when reading"))),Object(i.b)("li",{parentName:"ul"},"Render a list using the ",Object(i.b)("inlineCode",{parentName:"li"},".map")," method"),Object(i.b)("li",{parentName:"ul"},"Render components conditionally",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Using ternary operator and logical AND (",Object(i.b)("inlineCode",{parentName:"li"},"&&"),")"))),Object(i.b)("li",{parentName:"ul"},"Can add styles to elements using ",Object(i.b)("inlineCode",{parentName:"li"},"className")," (instead of ",Object(i.b)("inlineCode",{parentName:"li"},"class")," attribute)")),Object(i.b)("h3",{id:"passing-props"},"Passing props"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pass values to components as React props",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Receive props in a function component"),Object(i.b)("li",{parentName:"ul"},"Pass functions as props and call them in child components")))),Object(i.b)("h3",{id:"deployment"},"Deployment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Build and deploy a React application (to Netlify/Now/Heroku etc)")))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);