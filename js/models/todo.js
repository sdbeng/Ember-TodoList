Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

//Include the following fixture data:
Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn EmberJS and Rails',
		isCompleted: true
	},
	{
		id: 2,
		title: 'Brush angularjs skills every week',
		isCompleted: false
	},
	{
		id: 3,
		title: 'Push code to github daily',
		isCompleted: false
	}
];