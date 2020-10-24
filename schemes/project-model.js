const knex = require('knex');
const knexfile = require('../knexfile');

const db = require('../data/projects.db3');

function find() {
	return db('Projects');
}

function add(project) {
	return db('Projects')
		.insert(project)
		.then((ids) => {
			return findById(ids[0]);
		});
}
function findResources() {
	return db('Resources');
}

function addResource(resource) {
	return db('Resources')
		.insert(resource)
		.then((ids) => {
			return findById(ids[0]);
		});
}
function findTasks() {
	return db('Tasks');
}

function addTask(task) {
	return db('Tasks')
		.insert(task)
		.then((ids) => {
			return findById(ids[0]);
		});
}

module.exports = {
	find,
	add,
};
