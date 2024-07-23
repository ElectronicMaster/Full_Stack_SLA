function submit(){
    alert("Button is clicked")
    console.log("button is clicked")
}
function whatchanged(){
    console/log("Text", event.target.value)
}
function showContent(){
    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    document.body.appendChild(clone);
}
function showalert(event){
    alert("this is the birth year:");
    alert(event.target.value);
}