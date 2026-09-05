<?php
$number1=$_POST["number1"];
$number2=$_POST["number2"];
$operand=$_POST["operand"];

$result=0;
if($operand=="+")
        $result=$number1+$number2;
if($operand=="-")
        $result=$number1-$number2;
if($operand=="*")
        $result=$number1*$number2;
if($operand=="/")
        $result=$number1/$number2;
if($operand=="%")
        $result=$number1%$number2;
echo  "The result of your operation is: ".$result;
?>
