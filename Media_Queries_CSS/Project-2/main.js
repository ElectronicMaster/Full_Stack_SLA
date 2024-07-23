window.onload = screen;
window.onresize = screen;

function screen(){
    var width = window.innerWidth;
    document.getElementById("value").innerHTML = width + "px";
}