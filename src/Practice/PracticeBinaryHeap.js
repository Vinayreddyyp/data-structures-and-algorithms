import React from 'react';

const PracticeBinaryHeap = () => {
	class BinaryHeap {
		constructor() {
			this.values = [];
		}

		insert(element) {
			this.values.push(element);
			this.bubbleUp();
		}
		bubbleUp() {
			let idx = this.values.length - 1;
			const element = this.values[idx];
			while (true) {
				let parentIdx = Math.floor((idx - 1) / 2);
				let parent = this.values[parentIdx];
				if (element <= parent) break;
				this.values[parentIdx] = element;
				this.values[idx] = parent;
			}
		}

		sinkDown() {
			let idx = 0;
			let length = this.values.length;
			let element = this.values[0];
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
	return (
		<div>
			<h2>Practicing BInary Heap</h2>
		</div>
	);
};

export default PracticeBinaryHeap;
