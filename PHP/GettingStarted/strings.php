<?php 

header('Content-type: text/plain');		//helps in adding "\n"

$site = 'myWorld'; 

echo 'Welcome to $site'."\n"; 
echo "Welcome to $site"."\n";

echo strlen($site)."\n";

echo strrev($site)."\n";
echo str_replace("my","your",$site)."\n";
echo strpos($site,"orl")."\n";
echo trim($site,"myld")."\n";

?>