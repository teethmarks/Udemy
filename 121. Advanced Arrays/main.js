const array = [1, 2, 10, 16];

// forEach Method: loop through array, but doesn't return automatically
const double = []; // a new blank array has to be added to store the new values
const eachArray = array.forEach((num) => {
	double.push(num * 2); // this function pushes the new values into the blank array
});
console.log(double);


// 'map' method
// loop thru each element in the array, and return a new array (mapArray)
// use this method to have all new values stored in a new array instead of forEach
const mapArray = array.map((num) => {
	return num * 2;
});
// const mapArray = array.map(num => num * 2);
// shorthand way of writing this out. no need for extra brackets with arrow function if single parameter
console.log(mapArray); // returns 2, 4, 20, 32


// 'filter' method
// loop through the array and pass values which are true to the new array (filterArray)
const filterArray = array.filter((num) => {
	return num > 5; // which num is more than 5?
});
// const filterArray = array.filter(num => num > 5);
console.log(filterArray); // returns 10, 16


// 'reduce' method
// can be used for adding up all numbers in the array
// the accumulator used here (5), will add 5 to the total value of the items in the array
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5);
console.log(reduceArray); // returns 34