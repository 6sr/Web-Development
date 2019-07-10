<?php 
//http://php.net/manual/en/language.oop5.basic.php

echo "Books class begins from here <br>";
class Books { 

	/* Member variables */
	var $price; 
	var $title; 
		
	/* Member functions */
	function setPrice($par){ 
		$this->price = $par; 
	} 
		
	function getPrice(){ 
		echo $this->price."<br>"; 
	} 
		
	function setTitle($par){ 
		$this->title = $par; 
	} 
		
	function getTitle(){ 
		echo $this->title."<br>" ; 
	} 
} 

/* Creating New object using "new" operator */
$maths = new Books; 

/* Setting title and prices for the object */
$maths->setTitle( "Algebra" ); 
$maths->setPrice( 7 ); 

/* Calling Member Functions */
$maths->getTitle(); 
$maths->getPrice(); 


echo "<br>HelloWorld class begins from here <br>";
class HelloWorld {	 
	public $hello = "HelloWorld";
	
	// Constructor is being implemented.
	// Constructor is also called magic function because in PHP, 
	// magic methods usually start with two underscore characters.
	public function __construct($hello) {
		$this->hello = $hello; 
		echo 'The class "' . __CLASS__ . '" was initiated!<br>'; 
	}
	
	// Destructor 
	public function __destruct(){ 
		echo 'The class "' . __CLASS__ . '" was destroyed!<br>'; 
	} 
} 

// now constructor is called automatically 
// because we have initialized the object 
// or class Bird. 
$world = new HelloWorld("HelloLol"); 
$world->hello = "GeeksGeeks";
echo $world->hello; 

?> 
