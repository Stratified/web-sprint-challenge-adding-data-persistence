exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('resources')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('resources').insert([
				{
					id: 1,
					resource: 'rowValue1',
					name: 'kijsg89hg',
					description: '83hjg59n3g3ngk2jn',
				},
				{
					id: 2,
					resource: 'rowValue2',
					name: 'djyrfh',
					description: 'a983nb4',
				},
				{ id: 3, resource: 'rowValue3', name: '4m957' },
			]);
		});
};
