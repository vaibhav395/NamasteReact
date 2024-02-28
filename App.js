import React from "react";
import ReactDOM from "react-dom/client";

// 1- Creating a single element
// const element = React.createElement("h1", {id : "heading"}, "Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


// 2 - Creating nested elements and siblings
{/* <div id="parent">
    <div id="child">
        <h1>I am Main heading</h1>
        <h2>I am Secondary heading</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child"}, 
[React.createElement("h1", {}, "I am main heading"), React.createElement("h2", {},"I am Secondary heading")]),

React.createElement("div", {id:"child2"}, 
[React.createElement("h1", {}, "I am main heading2"), React.createElement("h2", {},"I am Secondary heading2")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);