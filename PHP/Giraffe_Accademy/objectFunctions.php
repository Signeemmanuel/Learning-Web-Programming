<?php
    class Student {
        var $name;
        var $major;
        var $gpa;
        function __construct($aname, $amajor, $agpa) {
            $this->name = $aname;
            $this->major = $amajor;
            $this->gpa = $agpa;
        }

        function hasHonors() {
            if($this->gpa >= 3.5) {
                return "True";
            }
            return "False";
        }
    }

    $student1 = new Student("Josue", "Computer Engineering", 3.98);
    $student2 = new Student("Samuel", "Accounting", 2.8);

    echo $student1->name . ": " . $student1->hasHonors() . "<br>";
    echo $student2->name . ": " . $student2->hasHonors() . "<br>";
    
?>