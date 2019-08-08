// Till now we have worked with Components with only static data. That is, we are writing data 
// directly inside a Component. What if, we want to pass some data to our Components? React allows 
// us to do so with the help of another property called props

import React from 'react'; 
import ReactDOM from 'react-dom'; 

// Input field component 
function Input() { 
	return( 
		<div> 
			<input type="text" placeholder="Enter Text.." /> 
			<br /> 
			<br />	 
		</div> 
	); 
} 

// Button Component 
function Button() { 
	return <button type = "submit">Submit</button>;	 
} 

// Form component 
function Form1() { 
	return ( 
		<div> 
			<Input /> 
			<Input /> 
			<Button />			 
		</div> 
	); 
} 

function Form2() { 
	return ( 
		<div> 
			<Input /> 
			<Input /> 
			<Input /> 
			<Input /> 
			<Button />			 
		</div> 
	); 
} 

ReactDOM.render( 
	<div><Form1/><Form2/></div>, 
	document.getElementById("root") 
); 
