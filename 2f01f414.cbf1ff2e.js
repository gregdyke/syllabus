(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(219)),i={id:"instructors",title:"Instructor Notes",sidebar_label:"Instructor Notes"},c={unversionedId:"react/class-components/instructors",id:"react/class-components/instructors",isDocsHomePage:!1,title:"Instructor Notes",description:"- Class components section",source:"@site/docs/react/class-components/mentors.md",permalink:"/react/class-components/instructors",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/class-components/mentors.md",sidebar_label:"Instructor Notes",sidebar:"React",previous:{title:"Class Components",permalink:"/react/class-components/lesson"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Class components section",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Students often get tripped on converting between functional & class components"),Object(o.b)("li",{parentName:"ul"},"Common problem - ",Object(o.b)("inlineCode",{parentName:"li"},"render(props)")," instead of using ",Object(o.b)("inlineCode",{parentName:"li"},"this.props")))),Object(o.b)("li",{parentName:"ul"},"Uses the ",Object(o.b)("inlineCode",{parentName:"li"},"state = {}")," class property pattern",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This avoids having to use a ",Object(o.b)("inlineCode",{parentName:"li"},"constructor")," and calling ",Object(o.b)("inlineCode",{parentName:"li"},"super(props)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Students won't have encountered class inheritance, so this can cause confusion"))))),Object(o.b)("li",{parentName:"ul"},"Uses the ",Object(o.b)("inlineCode",{parentName:"li"},"foo = () => {}")," method style",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For non-React-provided methods (e.g. lifecycle methods)"),Object(o.b)("li",{parentName:"ul"},"Avoids issues with ",Object(o.b)("inlineCode",{parentName:"li"},"this"),". Which is a huge pain to explain/understand, so we avoid it"),Object(o.b)("li",{parentName:"ul"},"This syntax isn't part of the spec yet, but CRA has babel plugin for it"),Object(o.b)("li",{parentName:"ul"},"Ensure that you cover the exception (lifecycle methods)"))),Object(o.b)("li",{parentName:"ul"},"Unmounting",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Open dev tools and show how DOM updates - shows that the DOM is changing in response to React"))),Object(o.b)("li",{parentName:"ul"},"Lifecycle",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The lifecycle diagram has been edited to simplify to just the lifecycle methods that we're interested in"))),Object(o.b)("li",{parentName:"ul"},"Clock exercise",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make sure they copy/paste the example code - post in Slack"),Object(o.b)("li",{parentName:"ul"},"Demonstrates the need to tear down subscriptions set up"),Object(o.b)("li",{parentName:"ul"},"Might need to touch on memory leaks",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'this is hard for them to grasp as "just a console.log" seems like it wouldn\'t take much memory'))))),Object(o.b)("li",{parentName:"ul"},"Data fetching",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Touch on ",Object(o.b)("inlineCode",{parentName:"li"},".then(res => res.json())")," - turns response into JSON"),Object(o.b)("li",{parentName:"ul"},"API is from Nasa - fetches Curiosity rover image from the given date"),Object(o.b)("li",{parentName:"ul"},"Error handling code to get fetch to throw an error on a non-200 response:")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),".then((res) => {\n  if (res.ok) {\n    return res\n  } else {\n    throw new Error('HTTP error')\n  }\n})\n")))}p.isMDXComponent=!0}}]);