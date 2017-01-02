<?php

if (isset($_POST['email'])) {

/*  if(!isset($_POST['first_name']) ||
!isset($_POST['last_name']) ||
!isset($_POST['email']) ||
!isset($_POST['textarea1'])){

  echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
  echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
  die();
}*/

  $email_message = "Nombre: " . $_POST['first_name'] . "\n";
  $email_message .= "Apellidos: " . $_POST['last_name'] . "\n";
  $email_message .= "Correo electrónico: " . $_POST['email'] . "\n";
  $email_message .= $_POST['textarea1'] . "\n";

}

$email_to = "alejandrodelgadomartel@gmail.com";
$email_from = $_POST['email'];

$headers = 'From: ' . $email_from . "\r\n" .
'CC: ' . $email_from;


mail($email_to, "Mensaje Web Quirocanarias.es", $email_message, $headers);

echo "Mensaje enviado";

?>
