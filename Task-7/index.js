//Task 07 - Create an IIFEs that print sum of 2 numbers.

var num1= parseFloat(prompt("Enter first Number:"));
var num2= parseFloat(prompt("Enter sec Number:"));

(function additon(x,y){
    var sum= x+y;
    document.write("sum="+sum);
})(num1,num2);