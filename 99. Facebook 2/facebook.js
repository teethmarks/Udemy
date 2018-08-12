// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// var user = {
// 	username: "david",
// 	password: "davidpass"
// }

// var user2 = {
// 	username: "jessie",
// 	password: "jessiepass"
// }
// var user3 = {
// 	username: "liwei",
// 	password: "liweipass"
// }

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
	{
		username: "david",
		password: "davidpass"
	},
	{
		username: "jessie",
		password: "jessiepass"
	},
	{
		username: "liwei",
		password: "liweipass"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
	{
		username: "Anne",
		timeline: "Help me schedule EDM"
	},
	{
		username: "Janice",
		timeline: "JSM?"
	},
	{
		username: "David",
		timeline: "Alright guys I'm going for a meeting"
	}
]

// check user first
function isUserValid(username, password){
	for (var i = 0; i < database.length; i++){
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}
// create a sign in function
function signIn(username, password) {
	if (isUserValid(username, password) === true){
		console.log(newsfeed);
	} else {
		alert('Sorry, wrong username and password');
	}
}

// prompt user to enter username and password
var userNamePrompt = prompt('what is ur username');
var passwordPrompt = prompt('what is ur password');

// call this function with userName and passWord input
signIn(userNamePrompt, passwordPrompt);