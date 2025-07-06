<?php 

$name = $_POST['name'];
$file = fopen('log.txt','a');
fwrite($file, $name.',');
fclose($file);

// the name of the file you're writing to
//$myFile = "data.txt";

// opens the file for appending (file must already exist)
//$fh = fopen($myFile, 'a');

// Makes a CSV list of your post data
//$comma_delmited_list = implode(",", $_POST) . "\n";

// Write to the file
//fwrite($fh, $comma_delmited_list);

// You're done
//fclose($fh);

 ?>