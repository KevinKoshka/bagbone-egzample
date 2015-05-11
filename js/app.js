//---------------VIEW-----------------

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

//---------------MODEL-----------------
//Los modelos se usan para representar datos del server, y las acciones
//que se realicen en ellas se traducirán en operaciones RESTful.
//El atrubito "id" identifica como encontrar el modelo en una base de datos
//

//Clase Person, base de los modelos. Como las views, tmb se puede
//setear la función initialize, que se ejecuta al instanciar la clase.
var Person = Backbone.Model.extend({
	initialize: function(){
		alert('Welcome to this world!');

		//Todos los atributos de un modelo pueden tener listeners
		//asociados para detectar cambios en los valores.
		this.on("change:species", function(model){
			if(model.get("species") === "Martian"){
				alert(model.get("name") + " just went Martian!");
			}
		});
	},

	//Se pueden definir propiedades por default.
	defaults: {
		name: "Fetus",
		age: 0,
		species: "Homo Sapiens Sapiens",
	},

	//Funciones de la clase.
	goMartian: function(){
		this.set({species: "Martian"});
	},
});

//Las propiedades de instancia se pueden setear en la misma creación...
var person1 = new Person({name:"Thomas", age:123});
//...O mediante model.set().
var person2 = new Person();
person2.set({name:"Carlos", age:321});


//Se obtienen los valores de las propiedades mediante model.get().
var age1 = (person1.get("name")) + ' ' + (person2.get("age"));
console.log(age1);

person2.goMartian();


var UserModel = Backbone.Model.extend({
	urlRoot: "user",
	defaults:{
		name: '',
		email: ''
	},
});

var user = new UserModel();
var userDetails = {
	name: 'Thomas',
	email: 'gofuckyourself@dickbutt.com'
};

user.save();

user.save(userDetails, {
	success: function(user){
		alert(user.toJSON());
		console.log(1);
	}
});

