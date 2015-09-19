<?php
$mail = addslashes($_POST[mail]);
$name = addslashes($_POST[name]);
$message = addslashes($_POST[msg]);

$recipient = "oliver.tristan@gmail.com";
$subject = "Message from tristanwhite.info - " . $name;
$msg = "<strong>From: </strong>" . $name;
$msg .= "<hr>";
$msg .= $message;

$header  = "MIME-Version: 1.0" . "\r\n";
$header .= "Content-type: text/html; charset='UTF-8'" . "\r\n";
$header .= "from:" . $mail;

mail($recipient, $subject, $msg, $header);
?>
