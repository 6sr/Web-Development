// State updates are independent i.e. We can update attributes of state one at a time

import React from 'react'; 
import ReactDOM from 'react-dom'; 

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCounter : 1
        };

		this.delta = this.delta.bind(this);
    }

    delta() {
        // This is not preferred as due to asynchronous processing, this.state.clickCounter may produce an undesirable result
        // this.setState({counter: this.state.clickCounter + this.props.diff});
        this.setState(
            (prevState, props) => ({
                clickCounter: prevState.clickCounter + props.diff
            })
        );
        
        // this.setState({clickCounter: 1});
        // Sets value of clickCounter to 1 and this is valid as we are not using any previous state value
    }

    render() {
        return (
            <div>
                <h1>{this.state.clickCounter}</h1>
                <button onClick={this.delta}>+</button>
            </div>
        );
    }
}
ReactDOM.render( 
	// passing props 
	<Counter user = "LOL"  diff={1} />, 
	document.getElementById("root") 
); 
