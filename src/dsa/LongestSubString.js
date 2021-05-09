import React from 'react';

const LongestSubString = () => {
	const findigLongestSubString = str => {
		let longest = 0;
		let seen = {};
		let start = 0;
		debugger;
		for (let i = 0; i < str.length; i++) {
			let char = str[i];
			if (seen[char]) {
				start = Math.max(start, seen[char]);
			}
			// index - beginning of substring + 1 (to include current in count)
			longest = Math.max(longest, i - start + 1);
			console.log('longest calculations', i - start + 1);
			// store the index of the next char so as to not double count
			seen[char] = i + 1;
		}
		return longest;
	};
	findigLongestSubString('abcdabcedghijklmno');

	return (
		<div>
			<h2>Finding Longest Sub String</h2>
		</div>
	);
};

export default LongestSubString;
