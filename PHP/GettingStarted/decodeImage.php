<?php 

// Program to illustrate base64_decode() 
// function 
$img = file_get_contents( 
'https://raw.githubusercontent.com/github-sr/Games/master/Maze/greenBall.png'); 
  
// Encode the image string data into base64 
$data = base64_encode($img); 
  
// Display the output 
echo $data; 
echo base64_decode($data). "\n"; 

?> 
