<?php
//$headers = "CC: abc@mail.com";
$http_origin = $_SERVER['HTTP_ORIGIN'];
header('Content-type: application/javascript');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Origin: $http_origin");
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json');
$to = "avanti.atre@smaaash.in,mukta.fernandes@smaaash.in,aadil@ting.in,rajiv@tingmail.in,vamsi@tingmail.in,arjun.garewal@smaaash.in, nilesh.jadhav@smaaash.in,bhupender.singh@smaaash.in,vipin@tingmail.in";
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
       "Regards,"."\r\n\n".
       "Administrator"."\r";
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
