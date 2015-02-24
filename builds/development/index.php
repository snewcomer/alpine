<?php
  if (isset($_POST['name'])) { $myname = $_POST['name']; }
  if (isset($_POST['email'])) { $myemail = $_POST['email']; }
  if (isset($_POST['comment'])) {
      $mycomments = filter_var($_POST['comment'], FILTER_SANITIZE_STRING );
  }

  $formerrors = false;

  if ($myname === '') :
    $formerrors = true;
  endif; // input field empty

  if (strlen($myemail) <= 6):
    if ( $ajaxrequest ) { echo "<script>$('#mypassword').after('<div class=\"error\">Sorry, the password must be at least six characters</div>');</script>"; }
    $formerrors = true;
  endif; //password not long enough

  if ( !(preg_match('/[A-Za-z]+, [A-Za-z]+/', $myname)) ) :
    $formerrors = true;
  endif; // pattern doesn't match


  $formdata = array (
    'myname' => $myname,
    'mypassword' => $myemail,
    'mycomments' => $mycomments
  );

    $to				= 	"snewcomer24@gmail.com";
    $subject	=		"From $myname";
    $message	=		json_encode($formdata);

    mail($to, $subject, $message)
?>
