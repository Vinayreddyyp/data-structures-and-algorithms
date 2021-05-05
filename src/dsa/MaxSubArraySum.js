import REact from 'react';

const MaxSubArraySum = () => {
	//findMaxSumArray is o of n square in time complexity
	// const findMaxSubArraySum = (arr, num) => {
	// 	if (arr.length < 0) {
	// 		return null;
	// 	}
	// 	let max = -Infinity;
	// 	for (let i = 0; i < arr.length - num + 1; i++) {
	// 		let temp = 0;
	// 		for (let j = 0; j < num; j++) {
	// 			temp += arr[i + j];
	// 		}
	// 		if (temp > max) {
	// 			max = temp;
	// 		}
	// 	}
	// 	console.log('max vlaue of the array', max);
	// 	return max;
	// };

	// findMaxSubArraySum([2, 3, 5, 3, 7, 9, 2, 3, 4, 8], 3);

	const slidingWindowPattern = (arr, num) => {
		let tempSum = 0;
		let maxSum = 0;

		for (let i = 0; i < num; i++) {
			maxSum += arr[i];
		}
		tempSum = maxSum;

		for (let i = num; i < arr.length; i++) {
			tempSum = tempSum - arr[i - num] + arr[num];
			debugger;
			maxSum = Math.max(tempSum, maxSum);
		}
		console.log('maxSum', maxSum);
		return maxSum;
	};
	slidingWindowPattern([2, 3, 5, 3, 7, 9, 2, 3, 4, 8], 3);
	return (
		<div>
			<h2>Find Max Sub Array Sum</h2>
		</div>
	);
};

export default MaxSubArraySum;
