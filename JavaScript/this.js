function greetFunc(firstName, lastName){
    var fullName = firstName + lastName;
    var greetMsg = this.greet + fullName;

    console.log(greetMsg);
}

var greetObj = {
    greet: "Hello, ",
    cangratulate: "Well done, "
}

var greetObj2 = {
    greet: "Hello All, ",
    cangratulate: "Well done, "
}

greetFunc.call(greetObj,"Sai","Anuush");

var arr = ["Sai","Anuush"]
greetFunc.apply(greetObj2,arr);

var func = greetFunc.bind(greetObj);
func("Sai","Anuush");