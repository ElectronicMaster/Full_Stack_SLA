var arr = []

var obj1 = {
    name: "SaiAnuush",
    age: 19,
    dept:"CSE",
    year:2
}
var obj2 = {
    name: "Gowtham",
    age: 18,
    dept:"ECE",
    year:3
}
var obj3 = {
    name: "Thiru",
    age: 21,
    dept:"MECH",
    year:4
}
var obj4 = {
    name: "Mani",
    age: 24,
    dept:"ARCH",
    year:1
}
var obj5 = {
    name: "Hima",
    age: 18,
    dept:"SCI",
    year:3
}

// arr.push(obj1);
// arr.push(obj2);
// arr.push(obj3);
// arr.push(obj4);
// arr.push(obj5);

arr.unshift(obj1,obj2,obj3,obj4,obj5);

console.log(arr);

arr.splice(2,1,obj1);   // adds element by removing one element
// arr.splice(position to insert, number of element to remove, element to add(optional));

arr.splice(2,0,obj1);
arr.splice(0,2);

console.log(arr);

// for(a of arr){
//     if(a.age<21){
//         console.log(a.name);
//     }
// }

arr1 = ["India","Pakistan","China"];
arr2 = ["USA","Canada","Mexico"];
var arr = [].concat("Brazil",arr1,"South Africa", arr2);
console.log(arr);