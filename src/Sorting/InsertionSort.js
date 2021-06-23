import React from 'react';

const InsertionSort = () => {
	const insertionSort = arr => {
		debugger;
		// for (let i = 1; i > arr.length; i++) {
		// 	let currentVal = arr[i];
		// 	for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
		// 		arr[j + 1] = arr[j];
		// 	}

		// 	arr[j + 1] = currentVal;
		// }
		var currentVal;
		for (var i = 1; i < arr.length; i++) {
			currentVal = arr[i];
			for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
				console.log('j', j);
				arr[j + 1] = arr[j];
			}
			arr[j + 1] = currentVal;
		}
		return arr;
	};
	insertionSort([2, 9, 1, 76, 4]);
	return (
		<div>
			<h2>Implementing selection sort</h2>
		</div>
	);
};

export default InsertionSort;
