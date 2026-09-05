process(){
let number1=document.getElementById("number1");
let operand=document.getElementById("operand");
let number2=document.getElementById("number2");
let result=0;
if(operand=="+"){
        result=number1+number2;
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
document.write("The result is : "+result);
}
