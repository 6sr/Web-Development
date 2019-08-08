// In order to run the code in react, you can either 
// Import it in other .js file using following statements
//      import App from './Keys.jsx';
//      ReactDOM.render(<App/>, document.getElementById('app'));
// or Do the following in this file :
//      Uncomment import statement, ReactDOM.render() function
//      Comment the export statement
//      Change the extension of this file to .js

import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id":1,
                    "name":"LOL1",
                    "age":"20"
                },
                {
                    "id":2,
                    "name":"LOL2",
                    "age":"30"
                },
                {
                    "id":3,
                    "name":"LOL3",
                    "age":"40"
                }
            ]
        }
   }
   render() {
        // We are setting the state in our parent component and passing it down the component tree using props
        return (
            <div>
                <Header/>
                <table border={3}>
                    <tbody>
                        {
                            this.state.data.map(
                                (person, i) => <TableRow key = {i} data = {person} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;

/*
ReactDOM.render( 
    <App/>, 
    document.getElementById("root") 
); 

*/

