import React from 'react';

const CountUniqueValues = () => {
	const findUniqueValues = arr => {
		let i = 0;
		for (let j = 1; j < arr.length; j++) {
			if (arr[i] !== arr[j]) {
				i++;
				console.log('i', i);
				arr[i] = arr[j];
				console.log('arr', arr);
			}
		}
		console.log('incremented i', i + 1);
		return i + 1;
	};
	findUniqueValues([1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9]);
	return (
		<div>
			<h2>Finding Count Unique Values</h2>
		</div>
	);
};

export default CountUniqueValues;
