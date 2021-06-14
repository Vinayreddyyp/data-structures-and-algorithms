import React from 'react';

const FindingPowerOfArgument = () => {
	const findingPower = (num, exponent) => {
		// if (exponent === 0) {
		// 	return 1;
		// }
		// return num * findingPower(exponent - 1);

		if (exponent === 0) return 1;
		return num * findingPower(num, exponent - 1);
	};

	findingPower(2, 3);

	return (
		<div>
			<h3>Finding Product of an Array</h3>
		</div>
	);
};

export default FindingPowerOfArgument;
