import React from 'react';

const MergeSort = () => {
	// const mergeArray = (arr1, arr2) => {
	// 	let i = 0;
	// 	let j = 0;
	// 	let results = [];
	// 	console.log('results', results);

	// 	while (i < arr1.length && j < arr2.length) {
	// 		if (arr2[j] > arr1[i]) {
	// 			results.push(arr1[i]);
	// 			i++;
	// 		} else {
	// 			results.push(arr2[j]);
	// 			j++;
	// 		}
	// 	}

	// 	while (i < arr1.length) {
	// 		results.push(arr1[i]);
	// 		i++;
	// 	}

	// 	while (j < arr2.length) {
	// 		results.push(arr2[j]);
	// 		j++;
	// 	}

	// 	return results;
	// };

	// const mergeSort = arr => {
	// 	if (arr.length <= 1) return arr;

	// 	let mid = Math.floor(arr.length / 2);
	// 	let left = mergeSort(arr.slice(0, mid));
	// 	let right = mergeSort(arr.slice(mid));
	// 	return mergeArray(left, right);
	// };

	// mergeSort([5, 3, 2, 21, 22]);

	const pivot = (arr, start = 0, end = arr.length + 1) => {
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		var pivot = arr[start];
		var swapIdx = start;

		for (var i = start + 1; i < arr.length; i++) {
			if (pivot > arr[i]) {
				swapIdx++;
				swap(arr, swapIdx, i);
			}
		}
		swap(arr, start, swapIdx);
		return swapIdx;
	};
	const quickSort = (arr, left = 0, right = arr.length - 1) => {
		if (left < right) {
			debugger;
			let pivotIndex = pivot(arr, left, right); //3
			console.log('pivot index', pivotIndex);
			//left
			quickSort(arr, left, pivotIndex - 1);
			//right
			quickSort(arr, pivotIndex + 1, right);
		}
		return arr;
	};

	quickSort([4, 6, 9, 1, 2, 5]);
	return (
		<div>
			<h2>Implementing Merge Sort</h2>
		</div>
	);
};

export default MergeSort;
