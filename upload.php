<?php
$target_dir = "images/images/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    //echo "File is uploaded and renamed  " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

/*
// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, the random name assigned already exists. Please try again. If this error occurs the folder is unfortunatley full.";
  $uploadOk = 0;
}*/

// Check file size
if ($_FILES["fileToUpload"]["size"] > 5000000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" /*&& $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif"*/ ) {
  echo "Sorry, only JPG files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
/*move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)*/
  $temp = explode(".", $_FILES["fileToUpload"]["name"]);
  $newfilename = 0 . '.' . end($temp); //10 är vad filen döps till. Hur får jag dem att döpa filen?
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], "images/images/" . $newfilename);
  header('Location:http://theodorkentros.com/interactiveguestbook.html'); //redirect
  //echo "your file is uploaded and renamed ";
  //echo $newfilename;
}
?>
