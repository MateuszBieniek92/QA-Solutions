<?php

$name = $_POST['name'];
$mail = $_POST['mail'];
$topic = $_POST['topic'];
$message = $_POST['message'];

$email_to = "bieniek.mateusz92@gmail.com";

$email_subject = "Otrzymales nowa wiadomosc ze strony QA Solutions";

$email_body = "Mail: \r\n";
$email_body .= "Nowa wiadomosc od uzytkownika: " .  $name . "\r\n";
$email_body .= "E-mail uzytkownika: "  .  $mail . "\r\n";  
$email_body .= "Temat: " . $topic . "\r\n";
$email_body .= "Wysłana wiadomosc: " . $message . "\r\n";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "FROM:". $mail ."\r\n"; 

$success = mail($email_to, $email_subject, $email_body, $headers);

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=success-form\index.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error-form\index.html\">";
}

?>
