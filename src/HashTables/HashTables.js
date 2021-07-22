import React from 'react';

const HashTables = () => {
	class hashTable {
		constructor(size = 4) {
			this.keyMap = new Array(size);
		}
		_hash(key) {
			let total = 0;
			let WEIRD_PRIME = 31;

			for (let char of key) {
				let value = char.charCodeAt(0) - 96;
				total = (total * WEIRD_PRIME + value) % this.keyMap.length;
			}

			return total;
		}

		set(key, value) {
			let index = this._hash(key);
			console.log('index', index);
			if (!this.keyMap[index]) {
				debugger;
				this.keyMap[index] = [];
			}
			this.keyMap[index].push([key, value]);
		}
		//[...,[["vinay", "hascode"], ["joey", "code"]]]
		get(key) {
			let index = this._hash(key);
			console.log('index of get', index);
			if (this.keyMap[index]) {
				for (let i = 0; i < this.keyMap[index].length; i++) {
					if (this.keyMap[index][i][0] === key) {
						console.log('this.keyMap', this.keyMap[index][i][0]);
						return this.keyMap[index][i][1];
					}
				}
			}
			return undefined;
		}

		values() {
			let valuesArr = [];

			for (let i = 0; i < this.keyMap.length; i++) {
				console.log('length', this.keyMap.length);
				if (this.keyMap[i]) {
					console.log('length inside if', this.keyMap[i].length);
					for (let j = 0; j < this.keyMap[i].length; j++) {
						if (!valuesArr.includes(this.keyMap[i][j][1])) {
							valuesArr.push(this.keyMap[i][j][1]);
						}
					}
				}
				console.log('arra of values', valuesArr);
				return valuesArr;
			}
		}
		keys() {
			let keyArr = [];
			for (let i = 0; i < this.keyMap.length; i++) {
				if (this.keyMap[i]) {
					for (let j = 0; j < this.keyMap[i].length; j++) {
						if (!keyArr.includes(this.keyMap[i][j][0]))
							keyArr.push(this.keyMap[i][j][0]);
					}
				}
			}
			console.log('keyArr', keyArr);
		}
	}

	let ht = new hashTable(4);

	ht.set('vinay', '#4004004');
	ht.set('joey', '#40040555');
	ht.set('reddy', '#4004058');
	ht.set('anusha', '#4098393');
	ht.set('yp', '#598606');
	ht.set('aratikrindi', '#02020202');
	ht.values();
	ht.keys();

	return (
		<div>
			<h2>Implementing Hash Tables</h2>
		</div>
	);
};

export default HashTables;
