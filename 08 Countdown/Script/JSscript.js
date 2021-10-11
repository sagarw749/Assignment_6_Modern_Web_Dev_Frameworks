

var number = parseInt(window.prompt("Enter the number to count down from"), 10);

var i;

if(number<0)
{
    window.alert("Enter a valid number greater than zero");
}
else
{
    for(i = number; i>=1; i--)
    {
      window.document.write(i + "<br>");   
    }
}
