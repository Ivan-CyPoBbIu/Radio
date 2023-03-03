<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "тема письма";
$file = $_FILES['file'];

$c = true;

$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
        $body .= "
        " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #E6E8EC;">' ) . "
            <td style='padding 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
    " ;
    }
}

$body = "<table style='width: 100%;'>$body</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
 $mail->isSMTP();
 $mail->CharSet = "UTF-8";
 $mail->SMTPAuth   = true;

 $mail->Host       = 'smtp.gmail.com';
 $mail->Username   = 'cypobbi@gmail.com';
 $mail->Password   = '';
 $mail->SMTPSecure = 'ssl';
 $mail->Port       = 465;

 $mail->setForm('cypobbi@gmail.com' , 'форма с сайта');

 $mail->addAddress('cypobbi@gmail.com');


 $mail->isHTML(true);
 $mail->Subject = $title;
 $mail->Body = $body;

 $mail->send();
} catch (Exception $e) {
    $status = "Сщщбщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}"
}
