//.......for vs forEach loop

// var numbers = [10,20,30,40];
// for(var x=0; x<numbers.length; x++)
// {
//     console.log(numbers[x]);
// }

// For Each .........

// var numbers = [10,20,30,40]
// numbers.forEach(function(x){
//     console.log(x);
// })

// next part...
// prottek ta item er sathe 5 jog hbe

var numbers = [10,20,30,40]
console.log(numbers);
numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
    console.log(numbers);
})

