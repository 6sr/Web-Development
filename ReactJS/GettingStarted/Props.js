// Props are immutable
import React from 'react'; 
import ReactDOM from 'react-dom'; 

// 1. class component
class ClassComponent extends React.Component{ 
	render(){ 
		return( 
				<div> 
					<h2>Hello {this.props.user}</h2> 
					<h3>Welcome to the world of ReactJS</h3> 
				</div> 
			); 
	} 
} 
ReactDOM.render( 
	// passing props 
	<ClassComponent user = "LOL" />, 
	document.getElementById("root") 
); 

// 2. functional component
function FunctionalComponent(props){ 
	return( 
		<div> 
			<h2>Hello {props.user}</h2> 
			<h3>Welcome to the world of ReactJS</h3> 
		</div> 
	); 
} 

ReactDOM.render( 
	// passing props 
	<FunctionalComponent user = "LOL" />, 
	document.getElementById("root") 
); 

// 3.                                       Passing information from one component to another

// Parent Component 
class Parent extends React.Component{ 
	render() { 
		return( 
				<div> 
					<h2>Inside Parent Component</h2> 
					<Child name="LOL" userId = "101"/> 
				</div> 
			); 
	} 
} 

// Child Component 
class Child extends React.Component{ 
	render() { 
        console.log(this.props); 
		return( 
				<div> 
					<h2>Hello, {this.props.name}</h2> 
					<h3>Inside Child Component</h3> 
					<h3>Your user id is: {this.props.userId}</h3> 
				</div> 
			); 
	} 
} 

ReactDOM.render( 
	// passing props 
	<Parent />, 
	document.getElementById("root") 
);

// 3.                                       Passing array, Using map(), defaultProps
class TestClass extends React.Component{ 
	render(){ 
		return( 
				<div> 
					{/* iterating over array using map() */} 
					<h1> Printing string directly: {this.props.propString}</h1>
					<h1> Printing array directly: {this.props.propArray}</h1>
					<h1> {
                        this.props.propArray.map (
                            function arrayIterator(ele,idx) {
                                return ("String " + (idx) + ": " + ele + ((idx !== 2)?', ':' '))
                            } 
                        )
                    } </h1> 
				</div>
			); 
	} 
} 

// Passing an array as prop 
TestClass.defaultProps = { 
    propString: 'LOL',
	propArray: ['LOL1', 'LOL2', 'LOL3'] 
} 

ReactDOM.render( 
	<TestClass />, 
	document.getElementById("root") 
); 
