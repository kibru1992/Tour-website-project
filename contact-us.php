<?php






$con = mysqli_connect('localhost','root','');

mysqli_select_db( $con,"contact");



$name = $_POST["name1"];
$email = $_POST["email"];
// $number = $_POST["number"];
$subject = $_POST["subject"];
$messag = $_POST["message"];



$query = " INSERT INTO contact  VALUES ('$name','$email','$subject','$messag')";

$result = mysqli_query($con,$query);


// if ($result) 
//         echo'<p>successfully filled the contact form</p>';
// else {
//         echo '<P>Something went wrong.</P>';
//      }  




?>
</body>
</html>
