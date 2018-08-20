const flattened = [[0, 1],[2, 3],[4, 5]].reduce(
	(accumulator, array) => {
		debugger; // this will cause debugger to open up
		return [].concat([0,1])
}, []);

// to run the next line of code, use the "step over" button in your browser