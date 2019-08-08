import React from 'react'; 
import ReactDOM from 'react-dom'; 

class App extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { hello : "Hello World" }; 
    } 
    changeState() { 
        if(this.state.hello === "Hello World")
            this.setState({ hello : "Hello User, Welcome to world of ReactJS" }); 
        else
            this.setState({ hello : "Hello World" }); 
    } 
    render() { 
        // this.changeState = this.changeState.bind(this)                       // Add this in constructor
        // <button onClick={this.changeState}>Press Here!</button>              // Change current button tag to this
        return ( 
            <div> 
                <h1>
                    <Content myHello = {this.state.hello}></Content>
                </h1>
                <h2> 
                    <button onClick={this.changeState.bind(this)}>Change Text</button> 
                </h2> 
            </div>
            ); 
    } 
} 

class Content extends React.Component {
    
    // executed before rendering, on both the server and the client side.
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    
    // executed after the first render only on the client side.
    // This is where AJAX requests and DOM or state updates should occur.
    // This method is also used for integration with other JavaScript frameworks 
    // and any functions with delayed execution such as setTimeout or setInterval.
    // We are using it to update the state so we can trigger the other lifecycle methods.
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    
    // invoked as soon as the props are updated before another render is called
    componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
    }
    
    // determines if the component will be updated or not, by default true
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    
    // called just before rendering
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    
    // called just after rendering
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    
    // called after the component is unmounted from the dom
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.myHello}</h3>
            </div>
        );
    }
}

ReactDOM.render( 
    <App/>, 
    document.getElementById('root')
); 

// unmounting component from the DOM
setTimeout(() => {
    ReactDOM.unmountComponentAtNode(
        document.getElementById('root')
    );

    // Notifying on DOM
    ReactDOM.render(
        <h1> Component Unmounted Successfully </h1>,
        document.getElementById('root')
    );
}, 10000);

