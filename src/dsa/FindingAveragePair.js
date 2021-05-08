import React from 'react';

const FindingAveragePair = () => {
	//two pointer technique
	const findingAverage = (arr, avg) => {
		let sum = 0;
		let left = 0;
		let right = arr.length - 1;
		while (left < right) {
			sum += arr[left] + arr[right];
			left++;
			right--;
		}

		let arrAverage = sum / arr.length;

		if (avg !== arrAverage) {
			console.log('returned false');
		}
		console.log('sum is equal to average', sum, arrAverage);
	};

	findingAverage([1, 3], 2);
	return (
		<div>
			<h2>Finding given average in the given array</h2>
		</div>
	);
};

export default FindingAveragePair;
