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
    updateState() {
        this.setState({data: 'Data updated from the child component...'})
    }
    render() {
        return (
            <div>
                <Content dataProp = {this.state.data} updateStateProp = {this.updateState}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.updateStateProp}>Click Here To Change Below Content</button>
                <h3>{this.props.dataProp}</h3>
            </div>
        );
    }
}

ReactDOM.render( 
    <App/>, 
    document.getElementById('root')
); 

