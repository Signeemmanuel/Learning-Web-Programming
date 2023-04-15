<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="matLibGame.php" method="get">
        <label for="#color">Color:</label>
        <input type="text" id="color" name="color">
        <br>
        <label for="#noun">Plural Noun</label>
        <input type="text" id="noun" name="noun">
        <br>
        <label for="celebrity">Celebrity</label>
        <input type="text" id="celebrity" name="celebrity">
        <br>
        <input type="submit">
    </form>

    <?php
        $color = $_GET["color"];
        $noun = $_GET["noun"];
        $celebrity = $_GET["celebrity"];
        echo "Roses are ". $color . "<br>";
        echo $noun . " Are blue " . "<br>";
        echo "I love " . $celebrity;
    ?>
</body>
</html>