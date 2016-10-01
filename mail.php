<?php
//$headers = "CC: abc@mail.com";
header('Content-Type: application/json');
$to = "vipin@tingmail.in";
$name = $_GET['name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$comment = $_GET['comment'];
$subject = $_GET['subject'];
$txt = "Dear Admin,"."\r\n\n".
       "Please check the following details : "."\r\n\n".
       "Name: ".$name."\r\n\n".
       "Email: ".$email."\r\n\n".
       "Phone no: ".$phone."\r\n\n".
       "Comment: ".$comment."\r\n\n".
       "Regards,"."\r\n".
       "Administration"."\r";
$check = mail($to,$subject,$txt);

	if($check)
	{
		$arr = [];
		$arr["value"]=true;
		$arr["message"] = "Email sent successfully.";
		echo json_encode($arr);
	}
	else
	{
		$arr = [];
		$arr["value"]=false;
		$arr["message"] = "Email sending error.";
		echo json_encode($arr);
	}
?>
