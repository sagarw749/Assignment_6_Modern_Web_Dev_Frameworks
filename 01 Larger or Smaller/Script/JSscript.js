

var num1 =parseInt(window.prompt("Enter first number"));
var num2 =parseInt(window.prompt("Enter second number"));

if(isNaN(num1) || isNaN(num2))
{
    alert("Please enter the appropriate number");
}
else if(num1 == num2)
{
    document.write("The two numbers are equal");
}
else if(num1> num2)
{
    document.write(num1 +  " is larger");
}
else
{
    document.write(num2 +  " is larger");
}