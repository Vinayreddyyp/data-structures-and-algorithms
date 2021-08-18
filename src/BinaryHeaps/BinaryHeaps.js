import React from 'react';

const BinaryHeaps = () => {
	class MaxBinaryHeap {
		constructor() {
			this.values = [41, 39, 33, 18, 27, 12];
		}
		insert(element) {
			this.values.push(element);
			this.bubbleUp();
		}
		bubbleUp() {
			let idx = this.values.length - 1;
			const element = this.values[idx];
			while (idx > 0) {
				let parentIdx = Math.floor((idx - 1) / 2);
				let parent = this.values[parentIdx];
				if (element <= parent) break;
				this.values[parentIdx] = element;
				this.values[idx] = parent;
				idx = parentIdx;
			}
		}
		//[55,39,41,18,27,12,33]

		dequeue() {
			debugger;
			let min = this.values[0];
			let end = this.values.pop();
			if (this.values.length > 0) {
				this.values[0] = end;
				this.sinkDown();
			}
			return min;
		}

		//[33,39,41]

		sinkDown() {
			let idx = 0;
			let length = this.values.length;
			let element = this.values[0];
			debugger;
			while (true) {
				let leftChildIndx = 2 * idx + 1;
				let rightChildIndx = 2 * idx + 2;
				let leftChild, rightChild;
				let swap = null;
				if (leftChildIndx < length) {
					leftChild = this.values[leftChildIndx];
					if (leftChild > element) {
						swap = leftChildIndx;
					}
				}

				if (rightChildIndx < length) {
					rightChild = this.values[rightChildIndx];
					if (
						(swap === null && rightChild > element) ||
						(swap !== null && rightChild > leftChild)
					) {
						swap = rightChildIndx;
					}
				}

				if (swap === null) break;

				this.values[idx] = this.values[swap];
				this.values[swap] = element;
				idx = swap;
			}
		}
	}

	let heap = new MaxBinaryHeap();
	debugger;
	heap.insert(55);
	heap.insert(30);
	heap.insert(20);
	heap.insert(10);
	heap.insert(5);

	heap.sinkDown();

	return (
		<div>
			<h2>Binary Heap Logic</h2>
		</div>
	);
};
export default BinaryHeaps;
