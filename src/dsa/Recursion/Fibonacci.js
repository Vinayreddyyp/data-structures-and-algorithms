import React from 'react';

const Fibonacci = () => {
	const findingFibonacci = num => {
		debugger;
		if (num <= 2) {
			return 1;
		}

		return findingFibonacci(num - 1) + findingFibonacci(num - 2);
	};

	findingFibonacci(6);

	return (
		<div>
			<h2>Finding Fibonacci series</h2>
		</div>
	);
};

export default Fibonacci;
