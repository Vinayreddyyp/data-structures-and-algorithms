import React from 'react';

const NaiveSearch = () => {
	const searchStirng = (long, short) => {
		let counter = 0;
		debugger;
		for (let i = 0; i < long.length; i++) {
			for (let j = 0; j < short.length; j++) {
				console.log('check arr lenth of short and long', short[j], long[i + j]);
				if (short[j] !== long[i + j]) {
					break;
				}
				if (j === short.length - 1) {
					console.log('found one');
					counter++;
				}
			}
		}
	};
	searchStirng('i love vinay', 'vin');
	return (
		<div>
			<h2>search given string </h2>
		</div>
	);
};
export default NaiveSearch;
