<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $phrase = "Giraffe Accademy";
        echo $phrase;
        echo "<br>";
        echo $phrase[0];
        echo "<hr>";
        echo substr($phrase, 8)."<br>";
        echo substr($phrase, 8, 3)."<br>";
        echo "<hr>";
        echo str_replace("Giraffe", "Code", $phrase)."<br>";
        echo "<hr>";
        echo strlen($phrase);
        echo "<hr>";
        echo strtolower($phrase)."<br>";
        echo strtoupper($phrase);
    ?>
</body>
</html>