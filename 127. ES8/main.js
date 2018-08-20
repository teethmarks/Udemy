'Turtle'.padStart(10);
// returns "    Turtle"
// it will add spaces at the start, so that the character count is 10.

'Turtle'.padEnd(10);
// returns "Turtle    "
// it will add spaces at the end, so that the character count is 10.

// trailing commas
const fun = (
			a, 
			b, 
			c, 
			d,
			e,
			) => {
	console.log(a);
}
fun(1,2,3,4,)
// it will still work even though there is a comma at the end
// best practice not to

Object.values // new and useful
Object.entries // new and useful
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolph',
	username2: 'Mr Grinch'
	// username0: 'Santa' << this is a PROPERTY of an object
	// username0 << this is the NAME of a property of an object
	// 'Santa' << this is the VALUE of a property of an object
}

// allows you iterate the properties like an array
// accesses both the name and value pair
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});

// allows you to iterate just the value of each property
Object.values(obj).forEach((value) => {
	console.log(value);
});

// it will return an array of properties
Object.entries(obj).forEach((value) => {
	console.log(value);
});

// generate usernames with index numbers
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
});