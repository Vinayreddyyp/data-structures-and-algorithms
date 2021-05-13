import React from 'react';

const SameFrequency = () => {
	const findingSameFrequency = (num1, num2) => {
		let strNum1 = num1.toString();
		let strNum2 = num2.toString();

		let countNum1 = {};
		let countNum2 = {};

		for (let i = 0; i < strNum1.length; i++) {
			countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
		}

		for (let j = 0; j < strNum1.length; j++) {
			countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
		}

		for (let key in countNum1) {
			if (countNum1[key] !== countNum2[key]) {
				debugger;
				console.log('returned false', countNum1[key]);
			}
		}

		console.log('returned true');
	};
	findingSameFrequency(283, 821);
	return (
		<div>
			<h2>Finding same frequency of the given numbers</h2>
		</div>
	);
};

export default SameFrequency;
