import React from 'react';

const CharCount = () => {
	const charCount = str => {
		let result = {};
		console.log('result', result);
		for (var char of str) {
			char = char.toLowerCase();
			result[char] = ++result[char] || 1;
		}
		return result;
	};

	charCount('hello');
	return (
		<div>
			<h2>Char Count</h2>
		</div>
	);
};

export default CharCount;
