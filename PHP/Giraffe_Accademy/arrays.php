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
        $friends = array("John", "Mary", "David", "Sarah");
        echo $friends . "<br>";
        echo $friends[1] . "<br>";
        echo count($friends) . "<br>";
        $friends[10] = "Mirabel";
        echo count($friends)."<br>";
        echo $friends[4]."<br>";
        echo $friends[10]."<br>";
    
    ?>
</body>
</html>