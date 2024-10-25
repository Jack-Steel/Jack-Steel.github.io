/*
    Name: Jack Steel
    Date: 10/25/24
*/

//Global Variables

//Function for the hamburger
function hamburger() {
    var menu = document.getElementById("menu-links");
    var head = document.getElementById("head");
    if (menu.style.display === "block" && head.style.display === "nonce") {
        menu.style.display = "none";
        head.style.display = "block";
    } else{
        menu.style.display = "block";
        head.style.display = "none";
    }
}
