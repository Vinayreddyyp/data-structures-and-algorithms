import React from 'react';

const LinearSearch = () => {
	const linearSearching = (arr, num) => {
		for (var i = 0; i < arr.length; i++) {
			debugger;
			if (arr[i] === num) {
				return i;
			}
		}
		return -1;
	};

	linearSearching([2, 3, 6, 7, 9, 10, 11, 23], 9);
	return (
		<div>
			<h2>Linear Search Algorithm</h2>
		</div>
	);
};

export default LinearSearch;
