<?php
    class Chef {
        function makeChicken() {
            echo "The Chef makes Chicken <br>";
        }
        function makeSpacialDish() {
            echo "The Chef makes Rice and Bean <br>";
        }
    }

    class CameroonianChef extends Chef {
        function makeEru() {
            echo "The Chef makes Eru <br>";
        }
        function makeSpacialDish() {
            echo "The Chef makes Achu <br>";
        }
    }


    $normalChef = new Chef();
    echo $normalChef->makeChicken();
    echo $normalChef->makeSpacialDish();

    $cameroonianChef1 = new CameroonianChef();
    echo $cameroonianChef1->makeChicken();
    echo $cameroonianChef1->makeEru();
    echo $cameroonianChef1->makeSpacialDish();
?>