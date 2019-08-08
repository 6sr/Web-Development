// Importing combination 
import React, {Component} from 'react'; 

class ChangeColor extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { color : '#4cb96b' }; 
    } 

    getClick() { 
        if (this.state.color === '#4cb96b') 
            this.setState({ color : '#aaa' }); 
        else
            this.setState({ color : '#4cb96b' }); 
    } 

    render() { 
        return  <h1 style = { this.state } onClick = {this.getClick.bind(this)}> 
                    {this.props.title} 
                </h1> 
    } 
}

// latest ES2015 provides this exporting pattern
// Exporting the component 
export default ChangeColor; 

// Earlier used
// module.exports = { // Define your exports here. }
