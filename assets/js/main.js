let h1 = document.getElementById("idhead");
let ul = document.getElementById("idlist");
h1.classList.add("headline")
ul.classList.add("liste");

function changeHeadline() {
    h1.classList.toggle("idhead");
    ul.classList.toggle("liste");
}

function resetHeadline() {
    h1.classList.toggle("idhead");
    ul.classList.toggle("liste");
}