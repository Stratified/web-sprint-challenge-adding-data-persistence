const knex = require('knex');
const express = require('express');

const server = require('./server.js');

const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
