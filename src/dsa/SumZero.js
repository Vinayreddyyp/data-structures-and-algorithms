import React, { useState } from 'react';

const SumZero = () => {
	const [arrSum, setArrSum] = useState();
	const findingSumZero = arr => {
		let left = 0;
		let right = arr.length - 1;
		debugger;
		while (left < right) {
			let sum = arr[left] + arr[right];
			if (sum === 0) {
				return [arr[right], arr[left]];
			} else if (sum > 0) {
				right--;
			} else left++;
		}
	};
	findingSumZero([-4, -3, -2, -1, 0, 1, 2, 7, 8]);
	return (
		<div>
			<h2>Finding Sum Zero in the Array</h2>
		</div>
	);
};

export default SumZero;
