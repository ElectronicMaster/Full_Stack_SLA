var array = ["BMW","Volvo","Suzuki","Mahendra","Tata"]

// Length
console.log("array.length : " + array.length);

// ToString
console.log("\narray.toString() : " + array.toString());
console.log("array : " + array);

// join()
// similar, to ToString() join to converts to string in addition we can add sepration
console.log("\narray.join() : " + array.join());
console.log("array.join(' * ') : " + array.join(" * "));

// pop()
console.log("\nbefore : array : " + array);

var popVal = array.pop();
console.log("popVal : " + popVal);

console.log("after : array : " + array);

// shift()
// removes element from beginning of the array
console.log("\nbefore : array : " + array);

var shiftVal = array.shift();
console.log("shiftVal : " + shiftVal);

console.log("after : array : " + array);

//unshift()
// adds element on the front of array and can add multiple too
console.log("push and unshift")
console.log("\nbefore : array : " + array);

array.unshift("BMW","Tata");    // adds at the front
array.push("BMW","Tata");   // adds at the last

console.log("after : array : " + array);

// splice
// to remove and add element at a point

// to remove using splice
console.log("using splice to remove");
console.log("\nbefore : array : " + array);
array.splice((array.length - 2),2);
console.log("after : array : " + array);

// adding element in specific location
console.log("using splice to add");
console.log("\nbefore : array : " + array);
array.splice(3,0,"Rolls Royce");
console.log("after : array : " + array);
array.splice(3,1);

// remove 2 elements and 1 element before adding
var temp = array

console.log("using splice to add and remove");
console.log("\nbefore : array : " + array);
array.splice(3,1,"Rolls Royce");
console.log("after : array : " + array);

console.log("\nbefore : array : " + array);
array.splice(3,2,"Rolls Royce","Lambhorgini");
console.log("after : array : " + array);

array = temp

// we can use "delete array[index]" to remove element but also leaves undefined holes in the mid


// concat method
var school = ["jishnu","thiru","gokul","hima","mani"];
var college = ["gowtham","akshit","vamsi","sreevardhan"]; 
friends = school.concat(college,"rachu");
console.log("\nfriends array: " + friends);

totalFriends = [].concat(school,"rachu","nivedha",college,"dharshini");
console.log("\ntotal friends : " + totalFriends);

// array detector
var arr = []

if(arr){
    console.log("arr : array is empty : " + arr);
}else{
    console.log("arr : array is not empty : " + arr);
}

if(school.indexOf("thiru")){
    console.log("friend exist");
}else{
    console.log("friend does not exist");
}

// slice
const fruits = ["Banana","Apple","Peace","Lemon","Mango"]
const myBest = fruits.slice(1,3);
console.log("\nfruits : " + fruits);
console.log("fruits.slice(1,3) : " + myBest);

//sort
var num = [1,43,12,233,0,213,21,65];
console.log("\nnum.sort() : " + num.sort());
console.log("num : " + num); 

// map
let count = 0;
var newArr = num.map((data) => {
    // count++;
    if(data > 200){
        return data - 200;
    }
}) 
console.log("num : ",num);
console.log("newArr : ",newArr);

// filter
var filterArr = num.filter((data) => {
    if(data < 50){
        return data+1000; // does not manipulate
    }
})
console.log("\nnum : ",num);
console.log("filterArr : ",filterArr);
var filterArr = num.map((data) => {
    return data+1000;
})
console.log("filterArr : ",filterArr);

// find
num = [1,4,12,2330,0,213,21,65];

var n = num.find((data) => {
    if(data%10 == 0){
        return data;
    }
})

var nIndex = num.findIndex((data) => {
    if(data%10 == 0){
        return data;
    }
})

console.log("\nfind : ",n);
console.log("findIndex : ",nIndex);

// split
const address = "126/6;KK Nagar;Kamarajar Salai;Chennai : 600078";
var arrAddress = address.split(";");
console.log("\naddress as string : ",address);
console.log("address as array : ",arrAddress);