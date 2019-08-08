import React from 'react'; 
import ReactDOM from 'react-dom'; 

function Example() { 
    const counter = 5; 

    return(
        <div>
            {
                (counter==5) &&
                <h1>Hello World!</h1>
            }
        </div>
        );
}

ReactDOM.render(
    <Example/>,
    document.getElementById('root') 
); 
