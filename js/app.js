SearchView = Backbone.View.extend({
	//Funcion que se ejecuta al principio.
	initialize: function(){
		this.render();
	},
	render: function(){
		//Compila el template usando Underscore.
		var template = _.template($("#search_template").html());
		//Paso variables que reemplazan con el template de Underscore.
		var variables = {
			searchLabel: "My Search",
		};
		var html = template(variables);
		//Carga el HTML compilado en "el" de Backbone.
		this.$el.append(html);
	},
	events: {
		//Eventos de la forma "event selector":"callback".
		"click input[type=button]": "doSearch" 
	},

	doSearch: function(){
		alert("Search for " + $("#search_input").val());
	}
});

var search_view = new SearchView({el: $("#search_container")});
