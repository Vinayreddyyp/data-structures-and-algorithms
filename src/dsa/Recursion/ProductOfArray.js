import React from 'react';

const ProductOfArray = () => {
	const findingProduct = arr => {
		debugger;
		if (arr.length === 0) {
			return 1;
		}

		return arr[0] * findingProduct(arr.slice(1));
	};
	findingProduct([1, 2, 3]);
	return (
		<div>
			<h2>Finding of product of an Array</h2>
		</div>
	);
};

export default ProductOfArray;
