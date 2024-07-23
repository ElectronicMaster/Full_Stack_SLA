var date = (new Date()).toString();
// var dateString = date.toString();
var dateArray = date.split(" ");
dateArray = dateArray.slice(0,5);
var time = dateArray[4];
console.log(
    "hrs : ",(time.split(":"))[0],
    "\nmin : ",(time.split(":"))[1],
    "\nsec : ",(time.split(":"))[2]
);
console.log("date : ",dateArray.slice(0,4));