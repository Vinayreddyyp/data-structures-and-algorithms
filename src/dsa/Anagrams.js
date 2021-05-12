import React from 'react';

const Anagrams = () => {
	const checkAnagrams = (str1, str2) => {
		if (str1.length !== str2.length) {
			return false;
		}
		let lookup = {};

		for (let char of str1) {
			lookup[char] = ++lookup[char] || 1;
		}
		for (let char of str2) {
			console.log('char', char);
			if (!lookup[char]) {
				return false;
			} else lookup[char] -= 1;
		}
		console.log('lookUp', lookup);
		return true;
	};
	checkAnagrams('anagramm', 'nagarams');

	if (checkAnagrams) {
		console.log('true');
	} else console.log('false');
	return (
		<div>
			<h2> Find Anagrams of the strings</h2>
		</div>
	);
};
export default Anagrams;
