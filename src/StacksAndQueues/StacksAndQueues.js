import React from 'react';

const StacksAndQueues = () => {
	class Node {
		constructor(val) {
			this.val = val;
			this.next = null;
		}
	}

	class Queues {
		constructor() {
			this.first = null;
			this.last = null;
			this.size = 0;
		}

		enqueue(val) {
			debugger;
			let newNode = new Node(val);
			if (!this.first) {
				this.first = newNode;
				this.last = newNode;
			} else {
				this.last.next = newNode;
				this.last = newNode;
			}
			return ++this.size;
		}

		dequeue() {
			if (!this.first) {
				return null;
			}
			if (this.first === this.last) {
				this.first = null;
				this.last = null;
			}

			let temp = this.first;
			this.first = this.first.next;
			this.size--;
			return temp.value;
		}
	}

	let list = new Queues();
	list.enqueue('1');
	list.enqueue('2');
	return (
		<div>
			<h2>Implemeenting Stacks And Queues</h2>
		</div>
	);
};

export default StacksAndQueues;
