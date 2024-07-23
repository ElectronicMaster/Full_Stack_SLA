var openDialog_var = document.getElementById("openDialog");
var closeDialog_var = document.getElementById("closeDialog");
var dialogBox = document.getElementById("myDialog");


function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("resetButton",ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("resetButton");
    ev.target.appendChild(document.getElementById(data));    
}

// Dialog function

openDialog_var.addEventListener("click",function(){
    console.log("button clicked");
    dialogBox.showModal();
});

closeDialog_var.addEventListener("click",function(){
    dialogBox.close();
});