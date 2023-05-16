let h1 = document.getElementById("idhead");
let ul = document.getElementById("idlist");
h1.classList.add("headline")
ul.classList.add("liste");

function changeHeadline() {
    ul.classList.toggle("liste");
}

