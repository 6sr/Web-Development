import React from 'react'; 
import ReactDOM from 'react-dom'; 

const numbers = [1,2,3,4,5]; 

// Printing on Console
const NumListConsole = numbers.map((number)=>{ 
    return number; 
}); 
console.log(NumListConsole); 


// Rendering on DOM
const NumListDOM = numbers.map((number)=>{ 
    return <li>{number}</li>; 
}); 

ReactDOM.render( 
    <ul> 
        {NumListDOM} 
    </ul>, 
    document.getElementById('root') 
); 


// Component that will return an unordered list 
function Navmenu1(props) {
    const list = props.menuitems; 

    const updatedList = list.map((listItems) => {
        return <li>{listItems}</li>;
    });

    return( 
        <ul>{updatedList}</ul> 
    ); 
} 

ReactDOM.render( 
    <Navmenu1 menuitems = {numbers} />, 
    document.getElementById('root') 
); 


// Component that will return an unordered list 
function Navmenu2(props) {
    const list = props.menuitems; 

    const updatedList = list.map((listItems) => { 
        return( 
            <li key = {listItems.toString()}> 
                {listItems} 
            </li> 
        ); 
    }); 

    return( 
        <ul>{updatedList}</ul> 
    ); 
} 

ReactDOM.render( 
    <Navmenu2 menuitems = {numbers} />, 
    document.getElementById('root') 
); 




