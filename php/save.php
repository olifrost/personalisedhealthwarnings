<?php
	// requires php5
	define('UPLOAD_DIR', 'n/');
	$img = $_POST['imgBase64'];
	$name = $_POST['name'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	//$file = UPLOAD_DIR . uniqid() . '.png';
	$file = UPLOAD_DIR . $name . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.';
?>