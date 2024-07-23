var arr = [
    {1:"Sai",2:"Jishnu",3:"Srivatsa"},
    {11:"Hima",12:"Thiru",13:"Gokul"},
    {21:"Gowtham",22:"Akshith",23:"Vamsi"}
]
var obj = {12:"Sai",23:"Jishnu",34:"Srivatsa"};

for(a in obj){

}

var newArr = [];
arr.map((data) => {
    for(id in data){
        newArr.push(id);
    }
})

var newArr1 = arr.map((data) => {
    let temp = [];
    for(id in data){
        temp.push(id);
    }
    return temp;
})

console.log("newArr : ",newArr);
console.log("\nnewArr1 : ",newArr1);

var filterArr = newArr.filter((data) => {
    if(Number(data)%2 == 0){
        return data;
    }
})
console.log("\nfilterArr : ",filterArr);