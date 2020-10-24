const express = require('express');
const projectRouter = require('./schemes/project-router');
const server = express();
server.use('/', projectRouter);
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome.' });
});

module.exports = server;
