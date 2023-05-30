var num = prompt("Enter your number :")

if(num > 100 || num < 0)
    console.log("Invalid Marks");

else if(num >= 80 && num <= 100)
    console.log("A+");

else if(num >= 70 && num <= 79)
    console.log("A");

else if(num >= 60 && num <= 69)
    console.log("A-");

else if(num >= 50 && num <= 59)
    console.log("B");

else if(num >= 40 && num <= 49)
    console.log("C");

else if(num >= 33 && num <= 39)
    console.log("D");

else
    console.log("Fail");