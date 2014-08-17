Todos.TodoController = Ember.ObjectController.extend({
	isEditing: false,

	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);

			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},

		removeTodo: function() {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	},

	isCompleted: function(key, value){
		var todo = this.get('model');

		if (value === undefined) {
			// property being used as a getter
			return todo.get('isCompleted');
		} else {
			// property being used as a setter
			todo.set('isCompleted', value);
			todo.save();
			return value;
		}
	}.property('model.isCompleted')
});