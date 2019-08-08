// https://www.npmjs.com/package/prop-types

import PropTypes from 'prop-types'; 
import React from 'react'; 
import ReactDOM from 'react-dom'; 

// Component 
class ClassComponent extends React.Component{ 
	render(){ 
		return( 
				<div> 
					{/* printing all props */} 
					<h1> 
						{this.props.propArray} <br/>
						{this.props.propBool} <br/>
						{this.props.propString} <br/>
						{this.props.propNumber} <br/>
                        {this.props.propFunc(3)} <br/>
                        {this.props.propObject.objectName1} <br/>
                        {this.props.propObject.objectName2} <br/>
                        {this.props.propObject.objectName3} <br/>
					</h1> 
				</div> 
			); 
	} 
} 

// validating prop types 
ClassComponent.propTypes = { 
	propArray: PropTypes.array, 
	propBool: PropTypes.bool, 
	propString: PropTypes.string, 
	propNumber: PropTypes.number, 
    propFunc: React.PropTypes.func,
    propObject: React.PropTypes.object
} 

// creating default props 
ClassComponent.defaultProps = { 

	propArray: ['LOL1', 'LOL2', 'LOL3'],
	propBool: true,
    propString: 'LOL',
	//propNumber: "LOLnumber",
	propNumber: "101",
    propFunc: function(e){return e},
    propObject: {
        objectName1:"objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
} 

ReactDOM.render( 
	<ClassComponent />, 
	document.getElementById("root") 
); 
