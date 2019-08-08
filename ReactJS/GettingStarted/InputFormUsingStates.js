// https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation

import React from 'react';
import ReactDOM from 'react-dom'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <Content inputValue = {this.state.data} updateInputValue = {this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <input type = "text" value = {this.props.inputValue} onChange = {this.props.updateInputValue} />
                <h3>{this.props.inputValue}</h3>
            </div>
        );
    }
}

ReactDOM.render( 
    <App/>, 
    document.getElementById('root')
); 



