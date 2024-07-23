window.onload = size;
window.onresize = size;

function size(){
    var width = window.innerWidth;
    document.getElementById("size").innerHTML = width + "px";
}