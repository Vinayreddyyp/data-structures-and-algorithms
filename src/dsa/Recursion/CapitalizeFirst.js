import React from 'react';

const CapitalizeFirst = () => {
	const capitalizeLetter = array => {
		debugger;
		if (array.length === 1) {
			return [array[0][0].toUpperCase() + array[0].substr(1)];
		}
		const res = capitalizeLetter(array.slice(0, -1));
		const string =
			array.slice(array.length - 1)[0][0].toUpperCase() +
			array.slice(array.length - 1)[0].substr(1);
		console.log('array.length - 1', array.length - 1);
		console.log(
			'array.slice(array.length - 1)[0]',
			array.slice(array.length - 1)[0]
		);
		console.log('string', string);
		res.push(string);
		return res;
	};
	capitalizeLetter(['vinay', 'car', 'val', 'reddy']);
	return (
		<div>
			<h2>Capitalizing the first letter of the string in an array</h2>
		</div>
	);
};

export default CapitalizeFirst;
