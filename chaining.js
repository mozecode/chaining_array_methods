var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//.sort, .filter, .map , .reduce

let newArrayOfNumbers=integers.sort(function(num1,num2){
	return num2-num1;// Sort the numbers in descending order (10, 9, 8, 7, etc).
}).filter(function(number){
	return number<=19;//remove any integers greater than 19
}).map(function(num){
	return (num * 1.5)- 1;
	// Multiply each remaining number by 1.5 and then subtract 1.
}).reduce(function(previous, current){
	return previous + current;
});

console.log ("newArrayOfNumbers",newArrayOfNumbers);

// Then output (either in the DOM or the console) the sum of all the resulting numbers.

