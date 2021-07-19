import React from 'react';

const BubbleSort = () => {
	const bubbleSort = arr => {
		let noSwaps;
		for (let i = arr.length; i > 0; i--) {
			noSwaps = true;
			for (let j = 0; j < i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					debugger;
					console.log('arr of arr[0], arr of arr[1]', arr[0], arr[j + 1]);
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					noSwaps = false;
				}
			}
			if (noSwaps) break;
		}
		console.log('arr sorted', arr);
		return arr;
	};
	bubbleSort([5, 3, 4, 1, 2]);
	return (
		<div>
			<h2>
				<h2>sorting the given array using Bubble sort Array</h2>
			</h2>
		</div>
	);
};

export default BubbleSort;
