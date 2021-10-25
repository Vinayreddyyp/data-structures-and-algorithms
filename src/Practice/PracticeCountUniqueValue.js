import React from 'react';

const PracticeCountUniqueValue = () => {
	const countUniqueValue = (arr) => {
		let i = 0;
		for (let j = 1; j < arr.length; j++) {
			if (arr[i] !== arr[j]) {
				i++;
				arr[i] = arr[j];
			}
		}
	};
	countUniqueValue([1, 1, 1, 1, 1, 2]);
	return (
		<div>
			<h2>Count Unique Values</h2>
		</div>
	);
};
export default PracticeCountUniqueValue;
