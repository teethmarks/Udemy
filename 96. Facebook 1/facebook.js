// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user = {
	username: "David",
	password: "haha1"
}

var user2 = {
	username: "Jessie",
	password: "haha2"
}

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [user, user2];

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

// create a sign in function
function signIn(user, pass){
	if ( 	user === database[0].username && pass === database[0].password || 
			user === database[1].username && pass === database[1].password ) {
		console.log(newsfeed);
		document.write('Hello, ' + user)
	} else {
		alert('sorry, username and password do not match or exist.')
	}
}

// prompt user to enter username and password
var userName = prompt('what is ur username');
var passWord = prompt('what is ur password');

// call this function with userName and passWord input
signIn(userName, passWord);