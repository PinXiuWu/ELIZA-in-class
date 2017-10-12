var numbers = [1, 2, 3, 4, 5];
            // 0  1  2  3  4

//numbers = numbers.slice(1,3);
//console.log(numbers);


//var position = numbers.indexOf(4);
//console.log(position);

var length = numbers.length;
console.log(length);

for(pos = 0 ; pos <= numbers.length ; pos++)
{
  console.log(numbers[pos]);
}




var numbers = [18, 356, 27, 3, 40];
for (pos = 0 ; pos < numbers.length ; pos++)
{
  if(numbers[pos] <= 30)
  {
    var result = numbers[pos]*numbers[pos];
    var msg = numbers[pos]+ "to the power of 2 is "+result;
    console.log(msg);
  }
}




//console.log(numbers[0]);
//console.log(numbers[5]);

/*numbers[3] = 10;

console.log(numbers[3]);

/*var Mike = [28, "Single", 175, 70 "Male"]
console.log(Mike[1]);*/
//not recommended to put different class of things in the same array

/*numbers.push(70);
//numbers[5] = 70;
console.log(numbers[5]);

numbers.pop();
console.log(numbers[5]);*/
