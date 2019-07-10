<?php 
$file = fopen(“demo.txt”,'w'); 
?> 


<?php 
$filename = "demo.txt"; 
$file = fopen( $filename, 'r' ); 
$size = filesize( $filename ); 
$filedata = fread( $file, $size ); 
?> 


<?php 
$file = fopen("demo.txt", 'w'); 
$text = "Hello world\n"; 
fwrite($file, $text); 
?> 


<?php 
$file = fopen("demo.txt", 'r'); 
//some code to be executed 
fclose($file); 
?> 

passing url entered by user to 404 page using htaccess

https://www.geeksforgeeks.org/php-program-count-page-views/
https://www.geeksforgeeks.org/php-cookies/
https://www.geeksforgeeks.org/php-uploading-file/
