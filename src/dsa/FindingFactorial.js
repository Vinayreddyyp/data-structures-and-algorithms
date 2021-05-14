import Reac from 'react';

const FindingFactorial = () => {
	const findingFactorial = num => {
		if (num === 1) {
			return 1;
		}
		return num * findingFactorial(num - 1);
	};
	findingFactorial(4);

	return (
		<div>
			<h2>Finding Factorial of given number</h2>
		</div>
	);
};

export default FindingFactorial;
