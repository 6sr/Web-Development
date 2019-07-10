<?php 
class BaseClass 
{ 
	public $public = 'Public'; 
	protected $protected = 'Protected'; 
	private $private = 'Private'; 

	function Display() 
	{ 
		echo $this->public; 
		echo $this->protected; 
		echo $this->private; 
	} 
} 

$obj = new BaseClass(); 
echo $obj->public; 
echo $obj->protected; // Cannot access protected property 
echo $obj->private; // Cannot access private property 
$obj->Display(); //Displays all properties 

class SubClass extends BaseClass 
{ 
	public $public = 'Public Sub Class'; 
	protected $protected = 'Protected Sub Class'; 

	function Display() 
	{ 
		echo $this->public; 
		echo $this->protected; 
		echo $this->private; 
	} 
} 

$obj2 = new SubClass(); 
echo $obj2->public; 
echo $obj2->protected; // Cannot access protected property 
echo $obj2->private; // Cannot access priavte property 
$obj2->Display(); //Displays all properties 
?> 
