<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="form.php" method="get">
        <label for="#user-name">Name:</label>
        <input type="text" id="user-name" name="userName">
        <br>
        <label for="#age">Age:</label>
        <input type="number" id="age" name="age">
        <br>
        <input type="submit">
    </form>
    <?php
        echo "<hr>";
        echo "User name: ". $_GET["userName"] ."<br>";
        echo "Age: ". $_GET["age"] . "<br>";
    ?>
</body>
</html>