"use strict";

function externalFunction1(clickedElement) {
    // Add some HTML to the page describing the clickedElement parameter
    // The id property has the value of the id attribute (if any)
    document.getElementById("element2").innerHTML =
        "<h2>Clicked by element with id=" + clickedElement.id + "</h2>";
}

function externalFunction2(clickedElement) {
    // Add some HTML to the page describing the clickedElement parameter
    // The innerText property has the value of the text content of the element (if any)
    // i.e. any text between the element's opening and closing tags
    document.getElementById("element2").innerHTML =
        "<h2>Clicked by element with innerText=" + clickedElement.innerText + "</h2>";
}
