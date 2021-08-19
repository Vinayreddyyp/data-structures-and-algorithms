import React from 'react';

const DoublyLinkedList = () => {
	class Node {
		constructor(val) {
			this.val = val;
			this.next = null;
			this.prev = null;
		}
	}

	class doublyLinkedList {
		constructor() {
			this.head = null;
			this.tail = null;
			this.length = 0;
		}

		push(val) {
			let newNode = new Node(val);

			if (!this.head) {
				this.head = newNode;
				this.tail = this.head;
			} else {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			}
			this.length++;
			return this;
		}

		pop() {
			if (!this.head) {
				return undefined;
			}

			let poppedNode = this.tail;
			debugger;
			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			} else {
				this.tail = poppedNode.prev;
				this.tail.next = null;
				poppedNode.prev = null;
			}

			this.length--;
			return poppedNode;
		}
		shift() {
			if (this.length === 0) {
				return undefined;
			}
			let oldHead = this.head;
			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			}
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
			this.length--;
			return oldHead;
		}

		unshift(val) {
			if (!this.head) {
				return undefined;
			}

			let newNode = new Node(val);
			if (this.length === 0) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.head.prev = newNode;
				newNode.next = this.head;
				this.head = newNode;
			}
			this.length++;
			return this;
		}

		get(index) {
			if (index < 0 || index >= this.length) return null;
			let count;
			let current;
			if (index <= this.length / 2) {
				count = 0;
				current = this.head;
				while (count !== index) {
					count++;
					current = current.next;
				}
			} else {
				count = this.length - 1;
				current = this.tail;
				while (index !== count) {
					count++;
					current = this.tail.prev;
				}
			}

			return current;
		}

		set(index, val) {
			if (index === -1) {
				return undefined;
			}

			let foundNode = this.get(index);
			if (foundNode !== null) {
				foundNode.val = val;
				return true;
			}
			return false;
		}

		insert(index, val) {
			debugger;
			if (index < 0 || index > this.length) {
				return undefined;
			}

			if (index === 0) {
				return this.unshift(val);
			}

			if (index === this.length) {
				return this.push(val);
			}

			let newNode = new Node(val);

			let beforeNode = this.get(index - 1);
			let afterNode = beforeNode.next;
			beforeNode.next = newNode;
			newNode.next = afterNode;
			newNode.prev = beforeNode;
			afterNode.prev = newNode;
			this.length++;
			return true;
		}

		remove(index) {
			if (index < 0 || index >= this.length) {
				return undefined;
			}
			if (index === 0) {
				return this.shift();
			}

			if (index === this.length - 1) {
				return this.pop();
			}

			let removeNode = this.get(index);

			let beforeNode = removeNode.prev;
			let afterNode = removeNode.next;

			beforeNode.next = afterNode;
			afterNode.prev = beforeNode;
			// removeNode.prev.next = removeNode.next;
			// removeNode.next.prev = removeNode.prev;
			removeNode.next = null;
			removeNode.prev = null;
			this.length--;
			return removeNode;
		}
	}

	let list = new doublyLinkedList();
	list.push(10);
	list.push(11);
	list.push(15);
	list.unshift(25);
	list.insert(2, 'vinay');
	list.insert(1, 'anusha');
	// list.get(2);
	// list.get(3);
	// list.set(1, 'vinay');

	return (
		<div>
			<h2>DoublyLinkedList</h2>
		</div>
	);
};

export default DoublyLinkedList;
