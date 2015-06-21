module.exports = function(app) 
{
	var professores = app.controllers.professores;
	app.get('/professores', professores.index);
	app.get('/professores/create', professores.create);
	app.get('/professores/delete/:id',professores.remove);
	app.get('/professores/edit/:id', professores.edit);

	app.post('/professores',professores.insert);
	app.post('/professores/edit/:id',professores.update);
}
