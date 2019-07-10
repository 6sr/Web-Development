<?php 

// a complex array 
$myvar = array( 
	'hello', 
	42, 
	array(1, 'two'), 
	'apple'
); 

echo "First method<br><br>";

$string = json_encode($myvar);		// serializing data 
$newvar = json_decode($string);		// decoding the above encoded string 

echo $string."<br><br>";
print_r($newvar);		// printing the decoded data 

echo "<br><br>Another method<br><br>";

$string = serialize($myvar);		// serialize the above data 
$newvar = unserialize($string); 	// unserializing the data in $string 

echo $string."<br><br>";
print_r($newvar);		// printing the unserialized data 

?> 
