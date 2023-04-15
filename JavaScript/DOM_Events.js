/*
    <!DOCTYPE html>
    <html>
    <body>

        <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

    </body>
    </html>
*/

/*
    In this example, a function is called from the event handler:

    Example
    <!DOCTYPE html>
    <html>
    <body>

        <h1 onclick="changeText(this)">Click on this text!</h1>

        <script>
        function changeText(id) {
        id.innerHTML = "Ooops!";
        }
        </script>

    </body>
    </html>
*/

/*
Assign Events Using the HTML DOM
The HTML DOM allows you to assign events to HTML elements using JavaScript:

    Example
    Assign an onclick event to a button element:
*/
    <script>
    document.getElementById("myBtn").onclick = displayDate;
    </script>

/*  
The onload and onunload Events
The onload and onunload events are triggered when the user enters or leaves the page.

    The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

    The onload and onunload events can be used to deal with cookies.

    Example

    <body onload="checkCookies()">
*/

/*
The onchange Event
The onchange event is often used in combination with validation of input fields.

    Below is an example of how to use the onchange. The upperCase() function will be called when a user changes the content of an input field.

    Example
    <input type="text" id="fname" onchange="upperCase()">
    The onmouseover and onmouseout Events
    The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element:

*/

/*
The onmousedown, onmouseup and onclick Events
The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.
*/