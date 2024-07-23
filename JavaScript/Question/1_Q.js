// 1. create one function called getStudent details
// 2. u should have this object reference in that func
// 3.  create one student Object called student
// 4. have name, id, dept,age
// 5. getStudent function should have one greetMsg argument
// 6. finally with greetmessage -> print all those details of student information with call , apply, bind

function getStudent(greetMsg){
    var finaleMsg = greetMsg + this.name + " of " + this.dept + " my age is " + this.age + " and my id is " + this.id; 
    console.log(finaleMsg);
}

var student = {
    name:"Saianuush",
    id:42,
    dept:"CSE",
    age:19
};

getStudent.call(student,"call: Hello everyone my name is ");

getStudent.apply(student,["apply: Hello everyone my name is "]);

var studentIntro = getStudent.bind(student);
studentIntro("bind: Hello everyone my name is ")