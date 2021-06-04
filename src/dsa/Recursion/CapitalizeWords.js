import React from 'react';

const CapitalizeWords = () => {
	const doingCapitalize = arr => {
		debugger;
		if (arr.length === 1) {
			return [arr[0].toUpperCase()];
		}

		const res = doingCapitalize(arr.slice(0, -1));
		const str = arr.slice(arr.length - 1)[0].toUpperCase();
		res.push(str);
		return res;
	};

	doingCapitalize(['i', 'am', 'vinay']);

	return (
		<div>
			<h2>Doing all the words in an array capitalize</h2>
		</div>
	);
};

export default CapitalizeWords;
