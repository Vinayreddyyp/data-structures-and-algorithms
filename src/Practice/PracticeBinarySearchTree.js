import React from 'react';
const practiceBinarySearchTree = () => {
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
			let newNode = new Node(value);
			if (this.root === null) {
				this.root = newNode;
				return this;
			} else {
				let current = this.root;
				while (true) {
					if (value < current.value) {
						if (current.left === null) {
							current.left = newNode;
							return this;
						} else {
							current = current.left;
						}
					} else if (value > current.value) {
						if (current.right === null) {
							current.right = newNode;
							return this;
						} else {
							current = current.right;
						}
					}
				}
			}
		}

		contains(value) {
			let current = this.root;
			let found = false;
			while (!found && current) {
				if (value < current.value) {
					current = current.left;
				} else if (value > current.value) {
					current = current.right;
				} else {
					found = true;
				}
			}
			return current;
		}

		BFS() {
			let node = this.root;
			let data = [];
			let queue = [];
			queue.push(node);
			while (queue.length) {
				node = queue.shift();

				data.push(node.value);
				if (node.left) queue.push(node.left);
				if (node.right) queue.push(node.right);
			}
			return data;
		}

		BFSPreOrder() {
			let data = [];

			const traversal = (node) => {
				data.push(node.value);
				debugger;
				if (node.left) traversal(node.left);
				if (node.right) traversal(node.right);
			};
			traversal(this.root);
			return data;
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
	tree.BFSPreOrder();

	return (
		<div>
			<h2>practice Binary Search Tree</h2>
		</div>
	);
};
export default practiceBinarySearchTree;
