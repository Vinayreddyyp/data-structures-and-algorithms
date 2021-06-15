import React from 'react';

const Flatten = () => {
	const doingFlatten = oldArr => {
		console.log('oldArr array', oldArr);
		debugger;
		var newArr = [];
		for (var i = 0; i < oldArr.length; i++) {
			if (Array.isArray(oldArr[i])) {
				newArr = newArr.concat(doingFlatten(oldArr[i]));
				console.log('new array', newArr);
			} else {
				newArr.push(oldArr[i]);
			}
		}
		return newArr;
	};

	doingFlatten([1, 2, 3, [1, 2]]);
	return (
		<div>
			<h2>Flatten the array in to single</h2>
		</div>
	);
};
export default Flatten;
