<?php

$name = $_POST['name'];
$email = $_POST['mail'];
$message = $_POST['message'];
$topic = $_POST['topic'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "TwojAdresEmail1@gmail.com";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "bieniek.mateusz92@gmail.com";

//$tytul = "Formularz kontaktowy z qasolutions.pl";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Temat: " . $topic . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $topic, $wiadomosc, "Od: <$email>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "  <label>Formularz został wysłany</label>";
}
else{
  print " <label>Formularz NIE został wysłany</label>";
}
?>
