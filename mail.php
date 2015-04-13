<?php
$mail = addslashes($_POST[mail]);
$name = addslashes($_POST[name]);
$msg = addslashes($_POST[msg]);

$recipient = "tw@d3sign.dk";
$subject = "Message from tristanwhite.info - " . $name;
$msg = $msg;

$header  = "MIME-Version: 1.0" . "\r\n";
$header .= "Content-type: text/html; charset='UTF-8'" . "\r\n";
$header .= "from:" . $mail;

mail($recipient, $subject, $msg, $header);
?>