import React from 'react';

const Same = () => {
	const findingSameArray = (arr1, arr2) => {
		if (arr1.length !== arr2.length) {
			return false;
		}

		let frequencyCounter1 = {};
		let frequencyCounter2 = {};

		for (let val of arr1) {
			frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
		}
		for (let val of arr2) {
			frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
		}
		console.log('frequency counter 1', frequencyCounter1);
		console.log('frequency counter 2', frequencyCounter2);
		for (let key in frequencyCounter1) {
			debugger;
			if (!(key ** 2 in frequencyCounter2)) {
				return false;
			}

			if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
				console.log('frequencyCounter2[key ** 2]', frequencyCounter2[key ** 2]);
				console.log('frequencyCounter1[key]', frequencyCounter1[key]);
				return false;
			}
		}
		return true;
	};
	findingSameArray([1, 2, 3], [1, 4, 9]);
	return (
		<div>
			<h2>Finding Same array</h2>
		</div>
	);
};
export default Same;
