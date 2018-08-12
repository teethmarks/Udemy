// PART ONE (adding list items)

//var button = document.getElementsByTagName('button')[0]; Add the index to reference it, or it will be an array

var button = document.getElementById('enter'); // select the button
var input = document.getElementById('userinput'); // select the input
var ul = document.getElementById('list'); // select the list

// add to the list function
function addToList(){
	var li = document.createElement('li'); // create the empty element <li>
	li.appendChild(document.createTextNode(input.value)); // this will add text (child) into the <li> element
	ul.appendChild(li); // append the li (child) to the ul
	input.value = ''; // reset the input
}

// clicking on enter function
function clickMethod(){
	if ( (input.value !== '') ) {
		addToList();
	}
}

// pressing enter function
function enterMethod(e){
	if ( input.value !== '' &&  e.which === 13) {
		addToList();
	}
}

// call!
button.addEventListener('click', clickMethod);
input.addEventListener('keypress', enterMethod);

// bonus: consider adding .trim() to the input.value to prevent firing up when user submits with spaces only

// PART 2 (marking list items)



