<?php 
	require 'config.php';
	session_start();
?>
<!DOCTYPE HTML>
<html>
<head>
<link rel="stylesheet" href="style.css">
<title>
Front end Back end
</title>
</head>
<body>
<?php
if(isset($_SESSION['username'])) {
	$username=$_SESSION['username'];
	$query13="select * from loginTable where username='$username'";
	$runquery13=mysqli_query($con,$query13);
    $rowdata=mysqli_fetch_array($runquery13);
	$username=$rowdata['username'];
	$img=$rowdata['img'];
	echo "
        <form method='POST'>
            <input type='submit' value='Logout' name='Logout' />
        </form>
    ";
	echo "
        <table>
        <tr>
            <td>Image</td>
            <td><img src='admin/$img'/></td>
        </tr>
        <tr>
            <td>Username</td>
            <td>$username</td>
        </tr>
        </table>
    ";
    if(isset($_POST['Logout'])){
        session_destroy();
    	echo "<script type='text/javascript'> document.location = 'login.php'; </script>";
    }
}
else{
	echo "Welcome admin";
}

?>
</body>
</html>