<?php
$name = $_POST['name'];
$email = $_POST['email'] ;
$subject = $_POST['subject'] ;
$message = $_POST['message'] ;
$emailid= $_POST['emailid'] ;

$headers .= "Organization: Sender Organization\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "X-Priority: 3\r\n";
  $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
  $headers .= "From:" .$name . "<$email>"."\r\n";

if(mail($emailid, $subject, $message,$headers )){
    echo "2";
}else
echo "1";
?>



