import React from 'react';

const NestedEvensum = () => {
	let obj = {
		outer: 2,
		name: 'vinay',
		obj: {
			inner: 2,
			name: 'anusha',
			otherObj: {
				superInner: 2,
				notANumber: true,
				alsoNotANumber: 'yup'
			}
		}
	};

	const findingNestedEven = obj => {
		let sum = 0;
		// for (let key in obj) {
		// 	debugger;
		// 	if (typeof obj[key] === 'object') {
		// 		sum += findingNestedEven(obj[key]);
		// 	} else if (typeof obj[key] === 'number' && obj[key] / 2 === 0) {
		// 		sum += obj[key];
		// 	}
		// }

		for (var key in obj) {
			debugger;
			if (typeof obj[key] === 'object') {
				sum += findingNestedEven(obj[key]);
			} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
				sum += obj[key];
			}
		}
		return sum;
	};
	findingNestedEven(obj);
	return (
		<div>
			<h1>Finding the even number in the Nested object</h1>
		</div>
	);
};

export default NestedEvensum;
