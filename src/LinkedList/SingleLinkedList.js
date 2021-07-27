import React from 'react';

const SingleLinkedList = () => {
	//Creating Node
	class Node {
		constructor(val) {
			this.val = val;
			this.next = null;
		}
	}

	class singleLinkList {
		constructor() {
			this.tail = null;
			this.head = null;
			this.length = 0;
		}
		//adding the node to the llist
		push(val) {
			var newNode = new Node(val);
			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.tail.next = newNode;
				console.log('this.tail.next', this.tail.next);
				this.tail = newNode;
				console.log('this.tail', this.newNode);
			}
			this.length++;
			console.log('this', this);
			return this;
		}

		//removing the Node at the end of the list

		pop() {
			if (!this.head) {
				return undefined;
			}

			let current = this.head;
			let newTail = current;

			while (current.next) {
				newTail = current;
				current = current.next;
			}

			this.tail = newTail;
			console.log('this.tail', this.tail);
			this.tail.next = null;
			this.length--;
			if (this.length === 0) {
				this.head = null;
				this.tail = null;
			}
			return current;
		}

		//removing the newNode from the begining of the list

		shift() {
			if (!this.head) {
				return undefined;
			}

			let currentHead = this.head;
			console.log('currentHead', currentHead);
			this.head = currentHead.next;
			this.length--;
			if (this.length === 0) {
				this.tail = null;
			}

			return currentHead;
		}

		//adding node at the beginning of the node
		unshift(val) {
			let newNode = new Node(val);

			if (!this.head) {
				this.head = newNode;
				this.tail = this.head;
			} else {
				newNode.next = this.head;
				this.head = newNode;
			}

			this.length++;
			return this;
		}

		//Retriving the  node ny it's postion in the Linked list

		get(index) {
			if (index < 0 || index >= this.length) return null;
			debugger;
			let current = this.head;
			let counter = 0;
			console.log('counter', counter);
			while (counter <= index) {
				current = current.next;
				counter++;
			}

			return current;
		}

		//changing the vlaue of a node based on it's postion in the linked list
		set(index, val) {
			debugger;
			let foundNode = this.get(index);
			if (foundNode) {
				foundNode.val = val;
				return true;
			}
			return false;
		}

		//Adding a node to the linked list at a specific position

		insert(index, val) {
			if (index < 0 || index >= this.length) return false;
			if (index === this.length) {
				this.push(val);
				return true;
			}

			if (index === 0) {
				this.unshift(val);
				return true;
			}

			let newNode = new Node(val);
			let prev = this.get(index - 1);

			let temp = prev.next;
			prev.next = newNode;
			newNode.next = temp;
			this.length++;
			return true;
		}

		//Renoving  a node from the linked list at a specific position;

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

			let previousNode = this.get(index - 1);
			debugger;
			let removed = previousNode.next;
			previousNode.next = removed.next;
			this.length--;
			return removed;
		}

		reverse() {
			let node = this.head;
			this.head = this.tail;
			this.tail = node;
			debugger;
			console.log('this.head', this.head);
			console.log('this.tail', this.tail);
			let next;
			let prev = null;
			for (let i = 0; i < this.length; i++) {
				next = node.next;
				node.next = prev;
				prev = node;
				node = next;
			}
			return this;
		}
	}

	let list = new singleLinkList();
	list.push('23');
	list.push('44');
	list.push('55');
	list.push('33');
	list.set('2', '100');

	return (
		<div>
			<h2>Implementing Single Linked List</h2>
		</div>
	);
};

export default SingleLinkedList;
