import React from 'react';
const Graphs = () => {
	class Graph {
		constructor() {
			this.adjacencyList = {};
		}
		addVertex(vertex) {
			if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		}
		addEdge(v1, v2) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
		removeEdge(vertex1, vertex2) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
				(v) => v !== vertex2
			);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
				(v) => v !== vertex1
			);
		}
		removeVertex(vertex) {
			while (this.adjacencyList[vertex].length) {
				const adjacentVertex = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacentVertex);
			}
			delete this.adjacencyList[vertex];
		}
		depthFirstRecursive(start) {
			debugger;
			const result = [];
			const visited = {};
			const adjacencyList = this.adjacencyList;

			(function dfs(vertex) {
				debugger;
				if (!vertex) return null;
				visited[vertex] = true;
				result.push(vertex);
				adjacencyList[vertex].forEach((neighbor) => {
					if (!visited[neighbor]) {
						return dfs(neighbor);
					}
				});
			})(start);

			return result;
		}
		depthFirstIterative(start) {
			const stack = [start];
			const result = [];
			const visited = {};
			let currentVertex;

			visited[start] = true;
			while (stack.length) {
				debugger;
				currentVertex = stack.pop();
				result.push(currentVertex);

				this.adjacencyList[currentVertex].forEach((neighbor) => {
					if (!visited[neighbor]) {
						visited[neighbor] = true;
						stack.push(neighbor);
					}
				});
			}
			return result;
		}
	}
	let graph = new Graph();
	graph.addVertex('A');
	graph.addVertex('B');
	graph.addVertex('C');
	graph.addVertex('D');
	graph.addVertex('E');
	graph.addVertex('F');
	graph.addEdge('A', 'B');
	graph.addEdge('A', 'C');
	graph.addEdge('B', 'D');
	graph.addEdge('C', 'E');
	graph.addEdge('D', 'E');
	graph.addEdge('D', 'F');
	graph.addEdge('E', 'F');
	graph.depthFirstIterative('A');

	return (
		<div>
			<h2>Implementing Graphs</h2>
		</div>
	);
};
export default Graphs;
