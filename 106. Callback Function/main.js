// EXAMPLE ONE
// Create a function to be called back later
function message(){
	console.log('message was called back.')
};

// setTimeout is a function that runs after a certain time (e.g. 3000 for 3 secs)
// This function calls back "message" after 3 secs.
setTimeout(message,3000);

// The shorthand way is to define the callback within the function.
setTimeout(function(){
	console.log('message was called back the shorthand way.')
},4000)


// EXAMPLE TWO
// The most common way of a callback is an event e.g. click.
var btn = document.querySelector('button');

//For event functions, a good habit will be to add "e" inside the brackets.
function shout(e){ 
	alert('YOU CLICKED.')
}

//this function calls back the shout() function. Notice that it has no brackets,
//as you do not want the function to run by itself. Adding brackets will make function run automatically.
btn.addEventListener('click',shout);