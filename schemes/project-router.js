const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
	Projects.find()
		.then((Projects) => {
			res.json(Projects);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get Projects' });
		});
});

router.post('/projects', (req, res) => {
	const projectData = req.body;

	Projects.add(projectData)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new project' });
		});
});
router.get('/resources', (req, res) => {
	Projects.find()
		.then((resources) => {
			res.json(resources);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

router.post('/resources', (req, res) => {
	const resourceData = req.body;

	Projects.add(resourceData)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new resource' });
		});
});
router.get('/tasks', (req, res) => {
	Projects.find()
		.then((task) => {
			res.json(task);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get tasks' });
		});
});

router.post('/tasks', (req, res) => {
	const taskData = req.body;

	Projects.add(taskData)
		.then((task) => {
			res.status(201).json(task);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to create new task' });
		});
});

module.exports = router;
