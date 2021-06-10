import React from 'react';

const CollectingStrings = () => {
	const obj = {
		stuff: 'foo',
		data: {
			val: {
				thing: {
					info: 'bar',
					moreInfo: {
						evenMoreInfo: {
							weMadeIt: 'baz'
						}
					}
				}
			}
		}
	};

	const findingStrings = obj => {
		let stringsCollection = [];

		for (let key in obj) {
			if (typeof obj[key] === 'object') {
				stringsCollection = stringsCollection.concat(findingStrings(obj[key]));
			} else if (typeof obj[key] === 'string') {
				stringsCollection.push(obj[key]);
			}
		}
		console.log('stringColleciton', stringsCollection);
		return stringsCollection;
	};

	findingStrings(obj);

	return (
		<div>
			<h2>Collecting strings in an object</h2>
		</div>
	);
};

export default CollectingStrings;
