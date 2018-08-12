
/* --USING LET-- */
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90){
	let wizardLevel = true;
	console.log('inside',wizardLevel);
}

console.log('outside',wizardLevel);

// 'inside' will be true, as it is within the scope of 'if'.
// 'outside' will be false, as it takes reference from the global scope.


/* --USING VAR-- */
const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90){
	var wizardLevel = true;
	console.log('inside',wizardLevel);
}

console.log('outside',wizardLevel);

// 'inside' will be true, as it is within the scope of 'if'.
// 'outside' will be true also, as var will take the last reference of what the var value is.
// not ideal. use let instead. this will be the new 'var'.


/* --USING CONST-- */
player = 'sally';
// this will return an error, as a const's value cannot be changed.
// if you have anything that shouldn't change at all, use const.
// good to use const for functions. ie const myFunction = function(){}

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}
// using const for an object.

obj = 10;
// this will return an error, as a const object cannot be changed.

obj.wizardLevel = true;
// you will however, be able to change an object's property.
// wizardLevel will be changed to true in this statement.


/* --DESTRUCTURING-- */
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// the old way to bind the object's properties and assign it to a var.

const { player, experience } = obj;
let wizardLevel = obj;
// the new way to bind the object's properties and assign it to a var.
// this way is better, less typing required.


/* --OBJECT PROPERTIES-- */
const name = 'nickname';
const obj = {
	[name]: 'david',
	[1 + 3]: 'numbers'
}
// you can now set dynamic properties in ES6
// access the obj and you will get 4: "numbers", nickname: "david"

const a = "Simon";
const b = true;
const c = {}; //empty object

const obj = {
	a: a,
	b: b,
	c: c
}
// The old way of assigning variables to properties (repetitive)
// returns {a: "Simon", b: true, c: {…}}

const obj = {
	a,
	b,
	c
}
// you can write this way instead, and it will do the same thing.


/* --TEMPLATE STRINGS-- */
let name = 'David';
let age = 35;
let hobby = 'drinking';

let greeting = "Hello, " + name + ". You seem " + age + ". You must love " + hobby + ".";
// Old way of stringing

let greeting2 = `Hello, ${name}. You seem ${age}. You must love ${hobby}.`;
// Using template strings. Easier to understand and write.


/* --DEFAULT ARGUMENT-- */
function greet(name='Kevin', age=32, hobby='cycling') {
	alert(`Hello, ${name}. You seem ${age}. You must love ${hobby}.`);
}
greet();
// This allows this function to have default arguments.

greet('Tame', age=36, hobby='flying drones');
// This allows me to change the values by assigning values to the arguments.


/* --SYMBOL-- */
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3
// This will return false, as symbols create unique objects
// Won't be seeing this often


/* --ARROW FUNCTIONS-- */
function add(a, b){
	return a + b;
}
// Old way of writing functions

const add = (a, b) => a + b;
// Does the same thing as above