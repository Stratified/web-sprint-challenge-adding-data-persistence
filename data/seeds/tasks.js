exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					id: 1,
					description: 'rowValue1',
					notes: '843gn432',
					project_id: 2,
					completed: true,
				},
				{
					id: 2,
					description: 'rowValue2',
					notes: 'shshdfg',
					project_id: 1,
					completed: false,
				},
				{
					id: 3,
					description: 'rowValue3',
					notes: '8k679t',
					project_id: 3,
					completed: true,
				},
			]);
		});
};
