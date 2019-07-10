<?php 
//http://php.net/manual/en/language.namespaces.php
//A namespace must be declared the namespace at the top of the file before any other code – with one exception: the declare keyword.
namespace MyNamespaceName;
function hello() { 
		echo 'Hello I am running from a namespace! lol <br>'; 
} 
function hello1() { 
		echo ' ABCDEF <br>'; 
} 

// Resolves to MyNamespaceName\hello 
hello(); 
hello1(); 

// Explicitly resolves to MyNamespaceName\hello 
namespace\hello(); 
namespace\hello1(); 

 echo "thank you <br>";		//For end of line in browser
echo "thank you ".PHP_EOL."";		//For end of line in file handling

namespace MyNamespaceName1;
function hello() { 
		echo 'Hello I am running from a namespace! <br>'; 
} 
	
// Resolves to MyNamespaceName\hello 
hello(); 

// Explicitly resolves to MyNamespaceName\hello 
namespace\hello(); 

// Error as this is another namespace
//hello1(); 
//namespace\hello1(); 

?> 
