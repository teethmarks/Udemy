// REFERENCE TYPE
[] === [];
// this will return false, as each time array is created, it is an object. So there are 2 different objects here.

[1] === [1];
// this will return false. same as the reason above.

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value:10 };

object1 === object2;
// this will return true, as defined in line 9.

object1 === object3;
// this will return false.

object1.value = 15;
// object1's value will be 15.

object2.value;
// this will return 15, as object1's value has changed, and object2 references object1

object3.value;
// this will return 10, as it is by itself, as defined in line 10.

// CONTEXT
// context is not the same as scope

// scope example
function b() {
	let a = 4;
}
console.log(a); // this will return "a is not defined", as all variables within a function will belong to its own universe.

// context example
console.log(this); // "this" will reference to the window object.
// the best way is think about is, "what is to the left of the dot"
// e.g. window.alert()

function a() {
	console.log(this);
}
// this will return the window object.
// because function a is equal as saying window.a();

const object4 = {
	a: function() {
		console.log(this);
	}
}
object.a();
// this will return the function


// INSTANTIATION
// Creating instances
// This used to be the .prototype syntax
// When you create a class, you need to add a constructor

class Player {
	constructor(name, type){
		this.name = name; // create property
		this.type = type; // create property
	}
	introduce() { // this is a method, within an obj
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}
// First, create a generic player

class Wizard extends Player{
	constructor(name, type){
		super(name, type) //whenever you extend a class, you need to use 'super'
	}
	play() {
		console.log(`WHEEEE I'm a ${this.type}`);
	}
}
// Then, create a wizard, extended from Player

const wizard1 = new Wizard('Shelly', 'Healer'); // now you can make an instant of wizard
const wizard2 = new Wizard('Shawn', 'Warlord'); // now you can make an instant of wizard

// Outputs: Try inputting these.

wizard2.name;
// This will return "Shelly"

wizard2.type;
// This will return "Healer"

wizard1.introduce();
// This will return "Hi I am Shelly, I'm a Healer"

wizard1.play();
// This will return 'WHEEEE I'm a Healer"

wizard2.name;
// This will return "Shawn"

wizard2.type;
// This will return "Warlord"

wizard2.introduce();
// This will return "Hi I am Shawn, I'm a Warlord"

wizard2.play();
// This will return "WHEEEE I'm a Warlord"