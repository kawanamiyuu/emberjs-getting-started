Todos.EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		// focus on End of Text
		var text = this.$().val();
		this.$().val(text).focus();
	}
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);