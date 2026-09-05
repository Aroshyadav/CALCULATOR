process(){
let number1=Document.getElementById("number1");
let operand=Document.getElementById("operand");
let number2=Document.getElementById("number2");
let result=0;
if(operand=="+")
        result=number1*number2;
}
if(operand=="*"){
        result=number1*number2;
}
if(operand=="-"){
        result=number1-number2;
}
if(operand=="/"){
        result=number1/number2;
}
Document.write("The result is : "+result);
}
