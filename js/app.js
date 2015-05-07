SearchView = Backbone.View.extend({
	//Funcion que se ejecuta al principio.
	initialize: function(){
		this.render();
	},
	variables: {
			searchLabel: "My Search",
			searchButton: '"caca"'
		},
	render: function(){
		//Compila el template usando Underscore.
		var template = _.template($("#search_template").html());
		//Paso variables que reemplazan con el template de Underscore.
		var html = template(this.variables);
		//Carga el HTML compilado en "el" de Backbone.
		this.$el.html(html);
	},
	events: {
		//Eventos de la forma "event selector":"callback".
		"click input[type=button]": "doSearch" 
	},

	doSearch: function(){
		alert("Search for " + $("#search_input").val());
		this.variables.searchButton = '"' + $('#search_input').val() + '"';
		this.render();
	}
});

var search_view = new SearchView({el: $("#search_container")});
