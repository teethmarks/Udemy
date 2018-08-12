// Create a function which I can pass the parent arguement and food argument in
function feedEmma (parent, food){
 	if (parent === "Linda" && food === "Milk"){
  		console.log("Emma is Happy");
 	} else {
 		console.log("Emma is Angry");
 	}
};

// I need to put the parent in ""
feedEmma("Ron", "Steak"); //This will result in Emma is Angry
feedEmma("Linda", "Milk"); //This will result in Emma is Happy
