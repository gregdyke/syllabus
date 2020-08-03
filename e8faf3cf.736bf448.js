(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),s=(n(0),n(219)),o={id:"lesson",title:"Node - 1",sidebar_label:"Lesson"},i={unversionedId:"node/week-1/lesson",id:"node/week-1/lesson",isDocsHomePage:!1,title:"Node - 1",description:"Learning Objectives",source:"@site/docs/node/week-1/lesson.md",permalink:"/node/week-1/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/node/week-1/lesson.md",sidebar_label:"Lesson",sidebar:"Node",previous:{title:"Overview",permalink:"/node/index"},next:{title:"Homework",permalink:"/node/week-1/homework"}},l=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"API Refresh (20 Minutes)",id:"api-refresh-20-minutes",children:[]},{value:"Intro to Node on Glitch",id:"intro-to-node-on-glitch",children:[{value:"Running a very simple web-server",id:"running-a-very-simple-web-server",children:[]}]},{value:"Make a Node API",id:"make-a-node-api",children:[{value:"Get Started",id:"get-started",children:[]}]},{value:"Step 1 - Installing The Project",id:"step-1---installing-the-project",children:[]},{value:"Step 2 - Building the server",id:"step-2---building-the-server",children:[{value:"1. Create a <code>server.js</code> file",id:"1-create-a-serverjs-file",children:[]},{value:"2. <code>require</code> the <code>express</code> library",id:"2-require-the-express-library",children:[]},{value:"3. Initialise the server",id:"3-initialise-the-server",children:[]},{value:"4. Start &#39;listening&#39; for potential requests",id:"4-start-listening-for-potential-requests",children:[]},{value:"5. Switch the server on!",id:"5-switch-the-server-on",children:[]},{value:"6. npm script",id:"6-npm-script",children:[]}]},{value:"Step 3 - Communicating with the server",id:"step-3---communicating-with-the-server",children:[{value:"What is a handler function?",id:"what-is-a-handler-function",children:[]},{value:"1. Create your own handler function",id:"1-create-your-own-handler-function",children:[]},{value:"2. Check it out in Postman",id:"2-check-it-out-in-postman",children:[]}]},{value:"Step 4 - Routing",id:"step-4---routing",children:[{value:"What is an endpoint?",id:"what-is-an-endpoint",children:[]},{value:"What is URL?",id:"what-is-url",children:[]}]},{value:"1. Create your own endpoints and send different responses",id:"1-create-your-own-endpoints-and-send-different-responses",children:[]},{value:"Step 5 - Query Parameters",id:"step-5---query-parameters",children:[{value:"1. Detect Query Parameters",id:"1-detect-query-parameters",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(s.b)("p",null,"By the end of this lesson students should be able to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Define what an API is used for"),Object(s.b)("li",{parentName:"ul"},"Use Glitch to deploy and edit ",Object(s.b)("inlineCode",{parentName:"li"},"express")," servers"),Object(s.b)("li",{parentName:"ul"},"Use ",Object(s.b)("inlineCode",{parentName:"li"},"npm")," to start a node server"),Object(s.b)("li",{parentName:"ul"},"Explain what ",Object(s.b)("inlineCode",{parentName:"li"},"express")," is and what it is used for"),Object(s.b)("li",{parentName:"ul"},"Use ",Object(s.b)("inlineCode",{parentName:"li"},"express")," to create an API that will accept a ",Object(s.b)("inlineCode",{parentName:"li"},"GET")," request that returns JSON"),Object(s.b)("li",{parentName:"ul"},"Implement routing to return different resources depending on URL"),Object(s.b)("li",{parentName:"ul"},"Implement query params to return different content (?query=ses)")),Object(s.b)("hr",null),Object(s.b)("h2",{id:"api-refresh-20-minutes"},"API Refresh (20 Minutes)"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"Group exercise (5 minutes)\n\nExercise: Discuss known APIs\n\n1. Groups discuss any APIs they know about.\n2. What might you do with it?\n3. Announce answers to class.\n")),Object(s.b)("p",null,"Before we make our own API, let's look at and use some other APIs."),Object(s.b)("p",null,"Here's an example API that shows us the Sunrise and Sunset times of everywhere in the world."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://sunrise-sunset.org/api"}),"Root"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://sunrise-sunset.org/api"}),"https://sunrise-sunset.org/api")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481"}),"Example: Sunset time in Bethnal Green"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481"}),"https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481"))))),Object(s.b)("p",null,"Next let's try an exercise"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"Group exercise 5 minutes: experiment with existing APIs\n\nPick a couple of these and experiment with them, modify the requests, report your findings.\n- http://www.tvmaze.com/api\n  - e.g. http://api.tvmaze.com/shows/82/episodes\n- Sunrise/Sunset times: https://sunrise-sunset.org/api\n  - e.g. Sunset in Bethnal Green: https://api.sunrise-sunset.org/json?lat=51.5311&lng=0.0481\n- Google Books API: https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699\n- Star Wars API: https://swapi.co/\n  - e.g.https://swapi.co/api/people/1/\n- UK Police Data. https://data.police.uk/docs/\n  - e.g. street-level crimes, Old Street, London: https://data.police.uk/api/crimes-street/all-crime?lat=51.5268&lng=0.0866\n- iTunes Search API: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/\n  - e.g. All Beyonce's music videos: https://itunes.apple.com/search?term=beyonce&entity=musicVideo\n- CYF resource-library https://resource-library.codeyourfuture.io/api/resources\n- (Difficult) Wikipedia API: https://en.wikipedia.org/w/api.php?\n")),Object(s.b)("p",null,"So what's the big deal? I can see this information on web sites already!"),Object(s.b)("p",null,"What's an API and how is it different from a web site?"),Object(s.b)("h2",{id:"intro-to-node-on-glitch"},"Intro to Node on Glitch"),Object(s.b)("h3",{id:"running-a-very-simple-web-server"},"Running a very simple web-server"),Object(s.b)("p",null,"Run the simplest web server code."),Object(s.b)("p",null,"We've made a really simple server about cats. You can check it out here:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://glitch.com/~cyfcats"}),"Source")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://cyfcats.glitch.me/"}),"Live"))),Object(s.b)("p",null,"Let's inspect the different parts of the Node App and how Express works. Let's discuss"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"require")," on Line 1"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"express()")," on Line 2"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"app.get()")," on Line 10"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"app.listen()")," on Line 15"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"response.sendFile()")," on Line 6 and Line 7")),Object(s.b)("p",null,"Can we work out what each those lines are doing?"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"In-Class Exercise"),Object(s.b)("p",{parentName:"blockquote"},"As a class - try to make a simple express server."),Object(s.b)("p",{parentName:"blockquote"},"You can pick any theme you like but maybe try"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"The class' favorite foods"),Object(s.b)("li",{parentName:"ul"},"The class' favorite songs"),Object(s.b)("li",{parentName:"ul"},"or get ideas from the class!"))),Object(s.b)("p",null,"Now let's make a server ourselves from scratch......."),Object(s.b)("h4",{id:"exercise-make-your-own-node-server-on-glitch"},"Exercise: Make your own node server (on glitch)"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'All students should "remix" this one for a simple start: https://glitch.com/~cyf-simple-express\nHave them it read and modify it to do something different.\n1. Login to Glitch and \u2018remix\u2019 this project and rename to be yours\n2. e.g. say "Hello Miles", instead of "Hello Kash"\n3. Make it return an array of strings as json.\n4. Make it return the current time\n5. Advanced: make it return whatever you want! 3 minutes.\n')),Object(s.b)("h2",{id:"make-a-node-api"},"Make a Node API"),Object(s.b)("p",null,"The rest of today's lesson is a workshop."),Object(s.b)("p",null,"In small groups complete each of the steps below. At different points, the teacher will introduce new concepts."),Object(s.b)("h3",{id:"get-started"},"Get Started"),Object(s.b)("p",null,"Fork and clone the repo ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/Node-Starter-Kit"}),"https://github.com/CodeYourFuture/Node-Starter-Kit"),"."),Object(s.b)("p",null,"It is an empty project that includes all the details you need to get started building your first Node App."),Object(s.b)("h4",{id:"download-postman"},"Download Postman"),Object(s.b)("p",null,"Postman is a tool that helps us test and develop APIs."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Download and install ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.getpostman.com/"}),"Postman"),".")),Object(s.b)("h2",{id:"step-1---installing-the-project"},"Step 1 - Installing The Project"),Object(s.b)("p",null,"We're going to use the ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.npmjs.com/"}),"Node Package Manager (npm)"))," to\nsetup the project using the ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"npm install"))," command."),Object(s.b)("p",null,"NPM is the place to go to download other Node code written by other people.\nThere are thousands of open-source, 3rd-party Node modules (also known as\n",Object(s.b)("em",{parentName:"p"},"packages"),") written by other people that you can download and use in your own projects."),Object(s.b)("p",null,"Run the following command in your terminal:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install\n")),Object(s.b)("h2",{id:"step-2---building-the-server"},"Step 2 - Building the server"),Object(s.b)("p",null,"The first thing we need to do is build our server. You will always need to build\na server when writing back-end code. A server can be built in pure Node.js, but\nExpress is simpler to work with."),Object(s.b)("h3",{id:"1-create-a-serverjs-file"},"1. Create a ",Object(s.b)("inlineCode",{parentName:"h3"},"server.js")," file"),Object(s.b)("p",null,"Let's build our server! Before we do anything, let's create a new file called\n",Object(s.b)("inlineCode",{parentName:"p"},"server.js"),". This is where all our server code is going to live."),Object(s.b)("h3",{id:"2-require-the-express-library"},"2. ",Object(s.b)("inlineCode",{parentName:"h3"},"require")," the ",Object(s.b)("inlineCode",{parentName:"h3"},"express")," library"),Object(s.b)("p",null,"We already installed Express in Step 2, but we need to make sure it is included\nin this file specifically so we can use its methods. In Node.js, when\nyou want to use a package in another file, you must ",Object(s.b)("inlineCode",{parentName:"p"},"require")," it."),Object(s.b)("p",null,"To require Express, write the following inside ",Object(s.b)("inlineCode",{parentName:"p"},"server.js"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Let us get used to ES6 syntax - so use ",Object(s.b)("inlineCode",{parentName:"p"},"const")," and ",Object(s.b)("inlineCode",{parentName:"p"},"let")," instead of\n",Object(s.b)("inlineCode",{parentName:"p"},"var"),", arrow methods instead of functions, etc...")),Object(s.b)("h3",{id:"3-initialise-the-server"},"3. Initialise the server"),Object(s.b)("p",null,"To initialise our server, we need to call the ",Object(s.b)("inlineCode",{parentName:"p"},"express()")," function. This\nwill create an Express application for us to work with."),Object(s.b)("p",null,"Add the second line of code to your ",Object(s.b)("inlineCode",{parentName:"p"},"server.js")," file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst app = express();\n')),Object(s.b)("h3",{id:"4-start-listening-for-potential-requests"},"4. Start 'listening' for potential requests"),Object(s.b)("p",null,"One more step left, we need to set a ",Object(s.b)("strong",{parentName:"p"},"port")," for our server to listen to. Think\nof a port as a door number; any requests that come to the server will come via\nthat door. Setting a port will allow us to find where our server is running."),Object(s.b)("p",null,"We use the ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"app.listen"))," method to do this. This method takes two arguments:\na ",Object(s.b)("strong",{parentName:"p"},"port")," and a ",Object(s.b)("strong",{parentName:"p"},"callback function")," telling it what to do once the server is\nrunning."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Need clarification? Read more about the ",Object(s.b)("inlineCode",{parentName:"p"},"app.listen")," method in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://expressjs.com/en/4x/api.html#app.listen"}),"Express documentation"),".")),Object(s.b)("p",null,"We're going to run our server on port ",Object(s.b)("inlineCode",{parentName:"p"},"3000"),", and add a simple ",Object(s.b)("inlineCode",{parentName:"p"},"console.log")," in the callback function. Update your ",Object(s.b)("inlineCode",{parentName:"p"},"server.js")," file, calling the ",Object(s.b)("inlineCode",{parentName:"p"},"app.listen")," method:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst app = express();\n\napp.listen(3000, function () {\n  console.log("Server is listening on port 3000. Ready to accept requests!");\n});\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Try to use ES6 arrow functions instead of ",Object(s.b)("inlineCode",{parentName:"p"},"function"),".")),Object(s.b)("h3",{id:"5-switch-the-server-on"},"5. Switch the server on!"),Object(s.b)("p",null,"You've built your server, but it isn't running yet. We need to run a command in\nthe terminal to do this. We are going to use the ",Object(s.b)("inlineCode",{parentName:"p"},"node")," keyword to run the\nserver file."),Object(s.b)("p",null,"Type the following command in your terminal:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"node server.js\n")),Object(s.b)("p",null,"If you see this, congratulations! You have built yourself a server!"),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/node-girls/workshop-cms/master/readme-images/step2-server02.png",alt:"success"}))),Object(s.b)("h3",{id:"6-npm-script"},"6. npm script"),Object(s.b)("p",null,"To exit the running the server, type ",Object(s.b)("inlineCode",{parentName:"p"},"crtl + c"),". Instead of running the server with ",Object(s.b)("inlineCode",{parentName:"p"},"node server.js")," everytime, we can create an alias for it in ",Object(s.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(s.b)("p",null,"Under the ",Object(s.b)("inlineCode",{parentName:"p"},"scripts")," property, add ",Object(s.b)("inlineCode",{parentName:"p"},"start: node server.js"),". We can now run our server using ",Object(s.b)("inlineCode",{parentName:"p"},"npm start")," which will be an alias (a shortcut) to ",Object(s.b)("inlineCode",{parentName:"p"},"node server.js"),"."),Object(s.b)("p",null,"Go to the terminal and type ",Object(s.b)("inlineCode",{parentName:"p"},"npm start")," and make sure that the server still runs."),Object(s.b)("h2",{id:"step-3---communicating-with-the-server"},"Step 3 - Communicating with the server"),Object(s.b)("p",null,"Now that we've built the server, we need to communicate with it. We are going to\ncontrol the server with ",Object(s.b)("strong",{parentName:"p"},"handler functions"),"."),Object(s.b)("h3",{id:"what-is-a-handler-function"},"What is a handler function?"),Object(s.b)("p",null,"When a request reaches the server, we need a way of responding to it. In comes\nthe handler function. The handler function is just a function which receives\nrequests and handles them, hence the name."),Object(s.b)("p",null,"The handler function is always called with a ",Object(s.b)("inlineCode",{parentName:"p"},"request")," and ",Object(s.b)("inlineCode",{parentName:"p"},"response")," object. The response object is what gets sent back to the client. It contains the information that gets displayed in the web page. You can decide what to send back in your response."),Object(s.b)("h4",{id:"what-does-a-handler-function-look-like-in-express"},"What does a handler function look like in Express?"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"get()")," ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://expressjs.com/en/api.html#app.get.method"}),"method")," is one of the methods used to\ndefine a handler function in Express. It takes two parameters: the ",Object(s.b)("strong",{parentName:"p"},"endpoint"),"\nat which to trigger an action (we'll explain more about this in the next step),\nand the handler function that tells it exactly what to do. Here's a simple\n\"Hello World!\" example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// req is the Request object, res is the Response object\n// (these are just variable names, they can be anything but it\'s a convention to call them req and res)\napp.get("/", function (req, res) {\n  res.send("Hello World!");\n});\n')),Object(s.b)("p",null,'Here, we are telling our server to respond with "Hello World!" when someone\ntries to access the webpage.'),Object(s.b)("h3",{id:"1-create-your-own-handler-function"},"1. Create your own handler function"),Object(s.b)("p",null,"Let us add a handler handler function to send back a message to the client. To do that,\nwe're going to use the Express ",Object(s.b)("inlineCode",{parentName:"p"},"send()"),"\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://expressjs.com/en/api.html#res.send"}),"method"),". This will update the\nresponse object with the message."),Object(s.b)("p",null,"Update your handler function like so:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const express = require("express");\nconst app = express();\n\napp.get("/", function (req, res) {\n  res.send("Yay Node!");\n});\n\napp.listen(3000, function () {\n  console.log("Server is listening on port 3000. Ready to accept requests!");\n});\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Exercise: Try to ",Object(s.b)("inlineCode",{parentName:"p"},"console.log")," the ",Object(s.b)("inlineCode",{parentName:"p"},"request")," object inside the handler\nfunction. Restart your server, send the request again with Postman, then go to your terminal\nto see what it looks like. You should see a lot of data come through.")),Object(s.b)("h3",{id:"2-check-it-out-in-postman"},"2. Check it out in Postman"),Object(s.b)("p",null,"Quit your server in the terminal with ",Object(s.b)("inlineCode",{parentName:"p"},"ctrl + c"),". Then restart it to run your\nnew changes."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"node server.js\n")),Object(s.b)("p",null,"Now, open Postman, and send a ",Object(s.b)("inlineCode",{parentName:"p"},"GET")," request to\n",Object(s.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),". If you see your message in Postman,\ncongratulations! You just sent your first response from the server."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Checkpoint: Do you understand all these terms? You should be able to see examples of them in Postman")),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Client"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Server"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Front-end"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Back-end"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Full stack developer"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Request"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Response"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","HTTP"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","HTTP Response Codes"),Object(s.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","HTTP Request Methods (or Verbs)")),Object(s.b)("h2",{id:"step-4---routing"},"Step 4 - Routing"),Object(s.b)("p",null,"At the moment our server only does one thing. When it receives a request from\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"/"),' endpoint, it sends back the same response: "Yay Node!".'),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Try typing http://localhost:3000/node and see what happens.")),Object(s.b)("p",null,"However by making use of endpoints, we can make the server send different\nresponses for different requests. This concept is called ",Object(s.b)("strong",{parentName:"p"},"routing"),"."),Object(s.b)("h3",{id:"what-is-an-endpoint"},"What is an endpoint?"),Object(s.b)("p",null,"An endpoint is the part of the URL which comes after ",Object(s.b)("inlineCode",{parentName:"p"},"/"),". For example:\n",Object(s.b)("inlineCode",{parentName:"p"},"/chocolate"),' is the "chocolate" endpoint. It\'s the URL to which you send a\nrequest.'),Object(s.b)("h3",{id:"what-is-url"},"What is URL?"),Object(s.b)("p",null,Object(s.b)("img",{alt:"alt text",src:n(232).default})),Object(s.b)("h2",{id:"1-create-your-own-endpoints-and-send-different-responses"},"1. Create your own endpoints and send different responses"),Object(s.b)("p",null,"We're going to try sending different responses at different endpoints. Remember\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"app.get()")," method? To set up routing in your server, we just need to repeat\nthis method with different endpoints."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/", function (req, res) {\n  res.send("Hello World!");\n});\n\napp.get("/chocolate", function (req, res) {\n  res.send("Mm chocolate :O");\n});\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Exercise:")," Add some code so that your server sends one message when the\nendpoint is ",Object(s.b)("inlineCode",{parentName:"p"},"/node")," and another one when it's ",Object(s.b)("inlineCode",{parentName:"p"},"/codeyourfuture"),".")),Object(s.b)("h2",{id:"step-5---query-parameters"},"Step 5 - Query Parameters"),Object(s.b)("p",null,"So, what is a query parameter?"),Object(s.b)("p",null,"In simple terms, a query string is the part of a URL (Uniform Resource Locater) after the question mark (?). It is meant to send small amounts of information to the server via the url. This information is usually used as parameters to query a database, or maybe to filter results. It's really up to you what they're used for."),Object(s.b)("p",null,"Here is an example of a URL with query strings attached:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackabuse.com/?page=2&limit=3"}),"https://stackabuse.com/?page=2&limit=3"))),Object(s.b)("h3",{id:"1-detect-query-parameters"},"1. Detect Query Parameters"),Object(s.b)("p",null,"We're going to try sending different responses at different endpoints. Remember\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"app.get()")," method? To set up routing in your server, we just need to repeat\nthis method with different endpoints."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'app.get("/", function (req, res) {\n  let searchQuery = req.query.search;\n  res.send("Hello World! You searched for " + searchQuery);\n});\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Exercise:")," Add some code so that your server returns the amount of chocolate that you\nwant from ",Object(s.b)("inlineCode",{parentName:"p"},"/chocolate")," endpoint. For example"),Object(s.b)("p",{parentName:"blockquote"},"http://localhost:3000/chocolate?amount=3")))}b.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||s;return n?r.a.createElement(h,i(i({ref:t},c),{},{components:n})):r.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/http1-url-structure-20f6e9249e0f11322516234d24e5cb35.png"}}]);