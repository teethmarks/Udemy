//Evaluate these:
//#1
[2] === [2]
// returns false, as it's 2 objects

{} === {}
// returns false, as it's 2 objects

//#2 what is the value of property a for each object.

const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

// object1 = 4
// object2 = 4
// object3 = 4
// object4 = 5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mammal extends Animal {
	constructor(name, type, color){
		super(name, type, color)
	}
	sound(){
		console.log(`moooooo! My name is ${this.name}, I am a ${this.type}, and my color is ${this.color}`);
	}
}

const cow = new Mammal('Daisy', 'Cow', 'Black & White');
const bull = new Mammal('Richard', 'Ox', 'Brown');

cow.sound();
// returns "moooooo! My name is Daisy, I am a Cow, and my color is Black & White"

bull.sound();
// returns "moooooo! My name is Richard, I am a Ox, and my color is Brown"