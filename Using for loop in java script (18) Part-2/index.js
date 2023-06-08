// 1+2+3+4+5 =

/*
var m = parseInt(prompt("Enter the starting number : "));
var n = parseInt(prompt("Enter the last number : "));


var sum = 0;

for(var x = m; x <= n; x = x + 1)
{
    sum = sum+x ;
}


document.write(sum) */

for(var x = 1; x <= 5; x++){
    var num1 = parseInt(prompt("Enter your first number : "));
    var num2 = parseInt(prompt("Enter your last number : "));

    var sum = num1 + num2;
    console.log("Result = " + sum);
}


