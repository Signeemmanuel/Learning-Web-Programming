const correctUserName = "Signe";
const correctPassword = "12345";


function validate(e) {
    e.preventDefault();
    const formElement = document.forms["login-form"];
    let userName = formElement["user-name"].value;
    let password = formElement["password"].value;
    
    if(correctUserName == userName && correctPassword == password) {
        window.location.assign(`home.html?username=${userName}`);
    }
    else {
        window.location.assign(window.location.href)
        alert("Invalid Credentials, Please try again!");
    }
}