<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contact.html");
    exit;
}

$name    = htmlspecialchars(trim($_POST["name"]));
$email   = htmlspecialchars(trim($_POST["email"]));
$subject = htmlspecialchars(trim($_POST["subject"]));
$message = htmlspecialchars(trim($_POST["message"]));

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    die("Erreur : champs manquants.");
}

$to = "clementvigier3@gmail.com";

$email_subject = "[Portfolio] " . $subject;

$email_body = "
Nouveau message depuis le portfolio :

Nom : $name
Email : $email

Message :
$message
";

$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

if (mail($to, $email_subject, $email_body, $headers)) {
    header("Location: contact.html");
} else {
    echo "Erreur lors de l'envoi du message.";
}
?>
