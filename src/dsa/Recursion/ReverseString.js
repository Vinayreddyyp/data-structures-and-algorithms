import React from 'react';

const ReverseString = () => {
	const stringReverse = str => {
		debugger;
		if (str.length <= 1) {
			return str;
		}

		return stringReverse(str.slice(1)) + str[0];
	};

	stringReverse('awesome');
	return (
		<div>
			<h3>Reversing String</h3>
		</div>
	);
};

export default ReverseString;
