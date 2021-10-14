import React from 'react';

const Anagrams = () => {
	const anagram = (str1, str2) => {
		const frequency1 = {};

		for (let i = 0; i < str1.length; i++) {
			let str = str1[i];
			frequency1[str] ? frequency1[str]++ : (frequency1[str] = 1);
			console.log('frequency 1', frequency1);
		}

		for (let char of str2) {
			console.log('str2', char);
			if (!frequency1[char]) {
				return false;
			} else {
				frequency1[char] -= 1;
			}
		}
	};
	anagram('aaz', 'zaa');
	return (
		<div>
			<h3>solution for Anagrams</h3>
		</div>
	);
};

export default Anagrams;
