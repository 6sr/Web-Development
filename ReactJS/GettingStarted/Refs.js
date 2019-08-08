// The ref is used to return a reference to the element.
// Refs should be avoided in most cases, 
// however, they can be useful when we need DOM measurements or to add methods to the components.
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
        return (
            <div>
                <input value = {this.state.data} onChange = {this.updateState} ref = "myInput"></input>
                <button onClick = {this.clearInput}> CLEAR </button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

ReactDOM.render( 
	<App/>, 
	document.getElementById("root") 
); 

