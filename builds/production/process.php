<?php
if (($_SERVER['REQUEST_METHOD'] == 'POST') && (!empty($_POST['action']))):
  if (isset($_POST['name'])) { $myname = $_POST['name']; }
  if (isset($_POST['email'])) { $myemail = $_POST['email']; }
  if (isset($_POST['comment'])) {
      $mycomments = filter_var($_POST['comment'], FILTER_SANITIZE_STRING );
  }

  $formerrors = false;

  if ($myname === '') :
    $err_myname = '<div class="error">Sorry, your name is required'; $formerrors = true; endif; // input field empty $formdata = array ( 'myname' => $myname, 'myemail' => $myemail, 'mycomments' => $mycomments ); if(!($formerrors)) : $to = "snewcomer24@gmail.com"; $subject = "Alpine - From $myname"; $message = json_encode($formdata); if(mail($to, $subject, $message)): $msg = "Thank you for contacting us"; else: $msg = "Problem sending the message"; endif; endif; endif; ?>