function process(){
let number1=document.getElementById("number1").val;
let operand=document.getElementById("operand").val;
let number2=document.getElementById("number2").val;
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
