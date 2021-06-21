import React from 'react';

const BinarySearch = () => {
	const binarysearching = (arr, val) => {
		let start = 0;
		let end = arr.length - 1;
		let middle = Math.round((start + end) / 2);

		debugger;
		while (arr[middle] !== val) {
			if (val < arr[middle]) {
				end = middle - 1;
			} else if (val > arr[middle]) {
				start = middle + 1;
			}
			middle = Math.round((start + end) / 2);
		}
		return arr[middle] === val ? middle : -1;
	};
	binarysearching([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15);
	return (
		<div>
			<h2>Finding value in an array using Binary Search</h2>
		</div>
	);
};

export default BinarySearch;
