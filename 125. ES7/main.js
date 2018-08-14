// INCLUDES
// checks if the string or operator contains a certain keyword

'Hello, how are you'.includes('how');
// returns true

const pets = ['cat','dog','bird'];
pets.includes('cat');
// returns true
pets.include('cow');
// returns false


// EXPODENTIAL OPERATOR
// You can now use this to find out a value to the power of x
const square = (x) => {
	return x**2;
}
square(2);
// returns 8

const cube = (x) => {
	return x**3;
}
cube(5);
// returns 125