<?php


$con = mysqli_connect('localhost','kiya','kiya4080');

mysqli_select_db( $con,'book');



$name = $_POST["name"];   
$guest = $_POST["guests"];
$arrive = $_POST["arrival"];
$leav = $_POST["leaving"];



$query = " INSERT INTO book VALUES ('$name','$guest','$arrive','$leav')";

$result = mysqli_query($con,$query);
// if ($result) 
//         echo'<p>you are succssefully booked<br> welcome to Ethio travel.</p>';
// else {
//         echo '<P>Something went wrong.</P>';
//      }  




?>
</body>
</html>
