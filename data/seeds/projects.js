exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('projects').insert([
				{
					id: 1,
					task: 'rowValue1',
					name: 'asd',
					description: '8342hfh23nf32ing2',
					completed: true,
				},
				{
					id: 2,
					task: 'rowValue2',
					name: '54k867',
					description: 'dghjdjd',
					completed: false,
				},
				{
					id: 3,
					task: 'rowValue3',
					name: 'sgfdhs',
					description: 'l78ty9l9y8t7',
					completed: false,
				},
			]);
		});
};
