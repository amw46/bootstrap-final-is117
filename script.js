/* DEVELOPER: Alice Woodruff, IS117-006, Spring 2018 */

function display(a) {
    var x = document.getElementById(a);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}