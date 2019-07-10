<?php 
//https://php.net/manual/en/book.curl.php

// From URL to get webpage contents. 
$url = "https://github.com/github-sr"; 

// Initialize a CURL session. 
$ch = curl_init(); 

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);	//Only this solves the problem of cURL in localhost
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);	// Then whats use of this

// Return Page contents. 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

//grab URL and pass it to the variable. 
curl_setopt($ch, CURLOPT_URL, $url); 

$result = curl_exec($ch); 

echo $result;

curl_close($ch);

/*
Some basic cURL functions:

1. The curl_init() function will initialize a new session and return a cURL handle.
2. curl_exec($ch) function should be called after initialize a cURL session and all the options for the session are set. Its purpose 
	is simply to execute the predefined CURL session (given by ch).
3. curl_setopt($ch, option, value) set an option for a cURL session identified by the ch parameter. Option specifies which option is to 
	set, and value specifies the value for the given option.
4. curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1) return page contents. If set 0 then no output will be returned.
5. curl_setopt($ch, CURLOPT_URL, $url) pass URL as a parameter. This is your target server website address.
	This is the URL you want to get from the internet.
6. curl_exec($ch) grab URL and pass it to the variable for showing output.
7. curl_close($ch) close curl resource, and free up system resources.

*/
?>
