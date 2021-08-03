import React from 'react';

const BinarySearchTree = () => {
	// class Node {
	// 	constructor(value) {
	// 		this.value = value;
	// 		this.left = null;
	// 		this.right = null;
	// 	}
	// }

	// class BinarySearching {
	// 	constructor() {
	// 		this.root = null;
	// 	}

	// 	insert(value) {
	// 		let newNode = new Node(value);
	// 		if (!this.root) {
	// 			this.root = newNode;
	// 			return this;
	// 		}
	// 		let current = this.root;
	// 		while (true) {
	// 			if (value < current.value) {
	// 				if (current.left === null) {
	// 					current.left = newNode;
	// 					return this;
	// 				} else {
	// 					current = current.left;
	// 				}
	// 			} else if (value > current.value) {
	// 				if (current.right === null) {
	// 					current.right = newNode;
	// 					return this;
	// 				} else {
	// 					current = current.right;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	find(value) {
	// 		debugger;
	// 		let current = this.root;
	// 		let found = false;
	// 		while (current && !found) {
	// 			if (value < current.value) {
	// 				current = current.left;
	// 			} else if (value > current.value) {
	// 				current = current.right;
	// 			} else {
	// 				found = true;
	// 			}
	// 		}
	// 		if (!found) {
	// 			return undefined;
	// 		}
	// 		return current;
	// 	}
	// }

	// let Tree = new BinarySearching();
	// Tree.insert(10);
	// Tree.insert(15);
	// Tree.insert(3);
	// Tree.insert(16);
	// Tree.insert(10);
	// Tree.insert(20);
	// Tree.insert(6);
	// Tree.find(3);

	class Node {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}

	class BinarySearchTree {
		constructor() {
			this.root = null;
		}
		insert(value) {
			var newNode = new Node(value);
			if (this.root === null) {
				this.root = newNode;
				return this;
			}
			var current = this.root;
			while (true) {
				if (value === current.value) return undefined;
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else {
					if (current.right === null) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}
		find(value) {
			debugger;
			if (this.root === null) return false;
			var current = this.root,
				found = false;
			while (current && !found) {
				if (value < current.value) {
					current = current.left;
				} else if (value > current.value) {
					current = current.right;
				} else {
					found = true;
				}
			}
			if (!found) return undefined;
			return current;
		}
		contains(value) {
			if (this.root === null) return false;
			var current = this.root,
				found = false;
			while (current && !found) {
				if (value < current.value) {
					current = current.left;
				} else if (value > current.value) {
					current = current.right;
				} else {
					return true;
				}
			}
			return false;
		}
	}

	//      10
	//   5     13
	// 2  7  11  16

	var tree = new BinarySearchTree();
	tree.insert(10);
	tree.insert(5);
	tree.insert(13);
	tree.insert(11);
	tree.insert(2);
	tree.insert(16);
	tree.insert(7);
	tree.find(11);
	return (
		<div>
			<h2>Binary Search Tree</h2>
		</div>
	);
};

export default BinarySearchTree;
