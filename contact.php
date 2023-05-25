<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Customize the email subject and recipient
  $to = "gangarign@gmail.com";
  $subject = "New Contact Form Submission";

  // Compose the email body
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message . "\n";

  // Send the email
  if (mail($to, $subject, $body)) {
    http_response_code(200); // Set HTTP status code to 200 (OK)
  } else {
    http_response_code(500); // Set HTTP status code to 500 (Internal Server Error)
  }
} else {
  http_response_code(400); // Set HTTP status code to 400 (Bad Request)
}
?>
