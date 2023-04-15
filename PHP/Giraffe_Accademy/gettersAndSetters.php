<?php
    class Movie {
        public $title;
        private $rating;

        function __construct($atitle, $arating) {
            $this->title = $atitle;
            $this->rating = $arating;
        }

        function setRating($arating) {
            $this->rating = $arating;
        }

        function getRating() {
            return $this->rating;
        }
    }

    $movie1 = new Movie("The passion of Christ", "PG");
    echo $movie1->title . ": " . $movie1->getRating() . "<br>";
    $movie1->setRating("G");
    echo $movie1->title . ": " . $movie1->getRating() . "<br>";
?>