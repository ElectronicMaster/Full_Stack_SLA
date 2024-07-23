var arr = [4,1,3,5];

// function findElement(array){
//     var arrLength = array.length;
//     var temp = array.sort();
//     for(let i=0;i<arrLength;i++){
//         if(temp[i] != i+1){
//             return i+1;
//         }
//     }
// }

var trueArr = [1,2,3,4,5];

const trueArrSum = trueArr.reduce((sum,value) => sum+value);
const arrSum = arr.reduce((sum,value) => sum+value);

console.log(trueArrSum-arrSum);

// console.log(findElement(arr));