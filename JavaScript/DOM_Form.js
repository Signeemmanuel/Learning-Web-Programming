function validateForm() {
    let x = document.forms["myForm"]["fName"].value;
    if (x === ""){
        alert("Name must be filled out");
        return false;
    }
}

// The HTML form is given bellow
/*
    <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
        Name: <input type="text" name="fname">
        <input type="submit" value="Submit">
    </form>
*/
