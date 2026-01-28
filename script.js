let num1 = Number(prompt("Enter the first number."));
if(!validityCheck(num1)) throw new Error("Invalid input");
let num2 = Number(prompt("Enter the second number."));
if(!validityCheck(num2)) throw new Error("Invalid input");
function validityCheck(num){
    if(isNaN(num)){
        return false;
    }
    else {
        return true;
    }
}
