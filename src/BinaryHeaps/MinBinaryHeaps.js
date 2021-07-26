import React from 'react';

const MinBinaryHeap = () => {
	class Node {
		constructor(value, priority) {
			this.value = value;
			this.priority = priority;
		}
	}
	class minBinaryHeap {
		constructor() {
			this.values = [];
		}

		enqueue(value, priority) {
			let newNode = new Node(value, priority);
			this.values.push(newNode);
			this.insert();
		}
		insert() {
			debugger;
			let idx = this.values.length - 1;
			let element = this.values[idx];
			while (idx > 0) {
				let parentIdx = Math.floor((idx - 1) / 2);
				let parent = this.values[parentIdx];
				if (element.priority <= parent.priority) break;
				this.values[parentIdx] = element;
				this.values[idx] = parent;
				idx = parent;
			}
		}
	}
	let ER = new minBinaryHeap();
	ER.enqueue('common cold', 5);
	ER.enqueue('gunshot wound', 1);
	ER.enqueue('high fever', 4);
	ER.enqueue('broken arm', 2);
	ER.enqueue('glass in foot', 3);
	return (
		<div>
			<h1>Min Binary Heap</h1>
		</div>
	);
};

export default MinBinaryHeap;
