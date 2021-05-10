import React from 'react';

const IsSubSequence = () => {
	const findingSubsequence = (str1, str2) => {
		console.log('str1', str1);
		console.log('str2', str2);

		let i = 0;
		let j = 0;
		while (j < str2.length) {
			debugger;
			if (str2[j] === str1[i]) i++;
			if (i === str1.length) return true;
			j++;
		}

		console.log('i', i);

		return false;
	};
	findingSubsequence('hello', 'hello world');
	return (
		<div>
			<h2>Finding sub sequence of the given two strings</h2>
		</div>
	);
};

export default IsSubSequence;
