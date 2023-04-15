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
            $num1 = 5;
            $num2 = 2.5;
            echo "num1 is ".$num1."<br>";
            echo "num2 is ".$num2."<br>";
            echo "num1 + num2 = ". $num1 + $num2 ."<br>";
            echo "num1 - num2 = ". $num1 - $num2 ."<br>";
            echo "num1 * num2 = ". $num1 * $num2 ."<br>";
            echo "num1 / num2 = ". $num1 / $num2 ."<br>";
            echo "num1 % 3 = ". $num1 % 3 ."<br>";
            echo "<hr>";
            echo "pow(3, 2) = ". pow(3, 2) ."<br>";
            echo "sqrt(16) = ". sqrt(16) ."<br>";
            echo "max(num1, num2) = ". max($num1, $num2) ."<br>";
            echo "min(num1, num2) = ". min($num1, $num2) ."<br>";
            echo "ceil(num2)". ceil($num2) ."<br>";
            echo "floor(num2)". floor($num2) ."<br>";
        ?>
    </body>
</html>