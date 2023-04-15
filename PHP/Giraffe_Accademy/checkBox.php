<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="checkBox.php" method="post">
        <label for="apple">Apple: 
            <input id="apple" type="checkbox" name="fruits[]" value="Apple">
        </label><br>
        <label for="banana">Banana: 
            <input id="banana" type="checkbox" name="fruits[]" value="Banana">
        </label><br>
        <label for="pear">Pear: 
            <input id="pear" type="checkbox" name="fruits[]" value="Pear">
        </label><br>
        <input type="submit">
    </form>
    <?php
        $fruits = $_POST["fruits"];
        echo count($fruits)."<br>";
        echo $fruits[0]."<br>";
    ?>
</body>
</html>