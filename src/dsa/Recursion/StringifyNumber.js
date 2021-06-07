import React from 'react';

const StringifyNumber = () => {
	let obj = {
		num: 1,
		test: [],
		data: {
			val: 4,
			info: {
				isRight: true,
				random: 66
			}
		}
	};

	const doingStringify = obj => {
		debugger;
		for (let key in obj) {
			if (typeof obj[key] === 'object') {
				obj[key] = doingStringify(obj[key]);
			} else if (typeof obj[key] === 'number') {
				obj[key] = JSON.stringify(obj[key]);
			}
		}

		return obj;
	};
	doingStringify(obj);
	return (
		<div>
			<h2>stringifying the number in the object </h2>
		</div>
	);
};

export default StringifyNumber;
