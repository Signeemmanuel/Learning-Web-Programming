<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="associativeArrays.php" method="post">
        <label for="student">Student Name:</label>
        <input type="text" id="student" name="studentName">
    </form>
    <?php
        $student = $_POST["studentName"];
        $grades = array("Jim" => "A+", "Jack" => "B-", "Jill" => "C-");
        echo $grades[$student];
    ?>
</body>
</html>