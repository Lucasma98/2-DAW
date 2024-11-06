<?php
switch ( $userAction ) {
    case “open”:
    // Open the file
    break;
    case “save”:
    // Save the file
    break;
    case “close”:
    case “logout”:
    print “Are you sure?”;
    break;
    default:
    print “Please choose an option”;
   }
?>