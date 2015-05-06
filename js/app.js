SearchView = Backbone.View.extend({
	//Funcion que se ejecuta al principio.
	initialize: function(){
		this.render();
	},
	render: function(){
		//Compila el template usando Underscore.
		var template = _.template($("#search_template").html(), {});
		//Carga el HTML compilado en "el" de Backbone.
		this.$el.html(template);
	}
});

var search_view = new SearchView({el: $("#search_container")});
