<?php
    class Book {
        var $title;
        var $author;
        var $pages;

        function __construct($a_title, $an_author, $a_pages) {
            $this->title = $a_title;
            $this->author = $an_author;
            $this->pages = $a_pages;
        }
    }
    $book1 = new Book("God Loves You", "Signe Josue", 120);

    echo "$book1->title <br>";
    echo $book1->pages;

?>