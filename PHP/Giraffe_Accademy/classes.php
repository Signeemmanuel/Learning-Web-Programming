<?php
    class Book {
        var $title;
        var $author;
        var $pages;
    }

    $book1 = new Book();
    $book1->title = "God Loves You";
    $book1->author = "Signe Josue";
    $book1->pages = 120;

    echo "$book1->title <br>";
    echo $book1->pages;
?>