

var coinFlip = Math.round(Math.random());
var choice = window.prompt("Please select (Heads/Tails)");
        
/* Assumption:
    Consider heads if coinFlip is 0 
    consider tails if result is 1 */

var coinFlip_Res = (coinFlip == 0) ? "heads" : "tails";
      

if(coinFlip_Res === "heads"  && choice === "Heads")
{
    window.document.write("The flip was heads and you chose heads...you've won");
}
else if(coinFlip_Res === "heads" && choice === "Tails")
{
    window.document.write("The flip was heads but you chose tails...you've lost!");
}
else if(coinFlip_Res === "tails" && choice === "Heads")
{
    window.document.write("The flip was tails but you chose heads...you've lost!");
}
else if(coinFlip_Res === "tails" && choice === "Tails")
{
    window.document.write("The flip was tails and you chose tails...you've won!");
}
else
{
    alert("Invalid input");
}

