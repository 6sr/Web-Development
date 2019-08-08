import React from 'react'; 
import ReactDOM from 'react-dom'; 

function showTime() { 
	const myElement = ( 
					<div> 
							<h1>Welcome to World of ReactJS</h1> 
							<h2>{new Date().toLocaleTimeString()}</h2> 
					</div> 
					); 

	ReactDOM.render( 
		myElement, 
		document.getElementById("root") 
	);					 
} 

setInterval(showTime, 1000); 

