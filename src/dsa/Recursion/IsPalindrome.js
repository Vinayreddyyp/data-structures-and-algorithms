import React from 'react';

const IsPalindrome = () => {
	const checkPalindrome = str => {
		console.log('str', str);
		debugger;
		if (str.length === 1) return true;
		if (str.length === 2) {
			return str[0] === str[1];
		}
		if (str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1));
		return false;
	};

	checkPalindrome('tacocat');

	return (
		<div>
			<h2>Checking the string is palindrome or not</h2>
		</div>
	);
};

export default IsPalindrome;
