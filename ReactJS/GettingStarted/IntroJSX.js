// https://facebook.github.io/react/
// https://reactjs.org/docs/introducing-jsx.html
// https://en.wikipedia.org/wiki/React_(JavaScript_library)#JSX

import React from 'react'; 
import ReactDOM from 'react-dom'; 

// 1 - basic tag rendering
var name = "User"; 
var element1 = <h1>Hello { name } 1,<br/> This is variable rendering</h1>; 

// 2 - if else expression
var i = 1;
var element2 = <h1>{ (i === 1) ? 'Hello User 2' : 'False 2' },<br/> This is rendering using if-else </h1>;

// 3 - Specifying attribute, Rendering multiple tags
// Attribute names in camel case
//For custom attributes, the names of such attributes should be prefixed by data-

// To render multiple tags we need to wrap all of this tag under a parent tag 
// and then render this parent element to the HTML
// All of the subtags are called child tags or child of this parent element
// Here h1, h2 is wrapped under div

const element3 = <div><h1 className = "hello">Hello User 3,</h1> 
			<h2 data-sampleAttribute="sample">This is rendering for multiple child tags</h2></div>; 

// 4 - Ways to specify attribute
var varName = "firstAttribute";
var element4 = <h1 className = "firstAttribute">Hello User 4,<br/> This is specifying attribute</h1>;
var element5 = <h1 className = {varName}>Hello User 5,<br/> This is specifying attribute using variable</h1>;

// 5 - Comments
const element6 = <div><h1>Hello User 6,<br/>This is using comments</h1> 
            { /* This is a comment in JSX */ } 
        </div>; 

var lol1 = [element1, element2, element3, element4, element5, element6]
ReactDOM.render( 
	lol1,
	document.getElementById("root") 
); 
