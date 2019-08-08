import React from 'react'; 
import ReactDOM from 'react-dom'; 

class ClassComponent extends React.Component { 
	constructor(props) { 
        // Calling the constructor of  
        // Parent Class React.Component 
        super(props); 
        
        // Setting the initial state 
		this.state = { attribute : "value" }; 
    } 
    render() {
        return <div>
                    <h1>Hello User</h1>
                    <h2>User prop : {this.props.user}</h2>
                    <h2>State attribute: {this.state.attribute}</h2>
                </div>
    }
} 
ReactDOM.render( 
	// passing props 
	<ClassComponent user = "LOL"/>, 
	document.getElementById("root") 
); 
// ClassComponent.setState({attribute:"new-value"});
// Error setState is not a function

