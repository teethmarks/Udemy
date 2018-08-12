// Array
fruits = [
	"apple",
	"banana",
	"orange",
	"grape",
	"watermelon"
];

// For Loop
document.write('for loop:<br>');
for (var i = 0; i < fruits.length; i++){
	document.write(fruits[i] + "<br>");
};
document.write('<hr><br>');

//while Loop
document.write('while loop:<br>');
var counter = 0;
while (counter < 10) {
	counter++;
	document.write(counter + "<br>");
}
document.write('<hr><br>');

// Do..While Loop
document.write('do..while Loop<br>');
var counterDo = 10;
do {
	counterDo--;
	document.write(counterDo + "<br>");
}
while (counterDo > 1);
document.write('<hr><br>');

// For Each Loop
document.write('forEach:<br>');
function shout(item, index){
	document.write(item, index + '<br>')
};
fruits.forEach(shout);

fruits.forEach(function shout(item, index){
	document.write(item, index)
});