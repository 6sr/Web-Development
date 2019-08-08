// https://reactjs.org/docs/components-and-props.html

// Should start with capital letter 
// in order to differentiate between html tags and component tags
import React from 'react'; 
import ReactDOM from 'react-dom'; 


// This is a functional component 

function Welcome() {
    return <h1>Hello World!</h1>;
}
ReactDOM.render( 
    <Welcome />, 
    document.getElementById("root") 
)

// This is a class component
class Democomponent extends React.Component {
    render() {
        return <h1>Welcome Message!</h1>;
    }
} 
ReactDOM.render( 
	<Democomponent />, 
	document.getElementById("root") 
); 

//                                                Composing Components

// Navbar Component 
function Navbar() { 
	return <h1>This is Navbar.</h1> 
} 

// Sidebar Component 
function Sidebar() { 
	return <h1>This is Sidebar.</h1> 
} 

// Article list Component 
function ArticleList() { 
	return <h1>This is Articles List.</h1> 
} 

// App Component 
function App() { 
	return( 
			<div> 
				<Navbar /> 
				<Sidebar /> 
				<ArticleList /> 
			</div> 
		); 
} 

ReactDOM.render( 
	<App />, 
	document.getElementById("root") 
); 

