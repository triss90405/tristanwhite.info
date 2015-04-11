<meta http-equiv="refresh" content="1;index.php?msg=Your%20message%20has%20been%20sent!" />
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<?php

$mail = addslashes($_POST[mail]);
$name = addslashes($_POST[name]);
$msg = addslashes($_POST[msg]);

$recipient = "tw@d3sign.dk";
$subject = "Message from tomjw.dk - " . $name;
$msg = $msg;

$header  = "MIME-Version: 1.0" . "\r\n";
$header .= "Content-type: text/html; charset='UTF-8'" . "\r\n";
$header .= "from:" . $mail;

mail($recipient, $subject, $msg, $header);
?>