//This will tell Ember.js to detect when the application's URL matches
// '/' and to render the todos template
Todos.Router.map(function() {
	this.resource('todos', {path: '/'});
});

//Implement a TodosRoute class with a model function that returns all the
//existing todo - will get rid of the hardcoded data
Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});