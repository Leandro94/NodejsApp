module.exports = function(app) 
{
	var alunos = app.controllers.alunos;
	app.get('/alunos', alunos.index);
	app.get('/alunos/create', alunos.create);
	app.get('/alunos/delete/:id',alunos.remove);
	app.get('/alunos/edit/:id', alunos.edit);


	app.post('/alunos',alunos.insert);
	app.post('/alunos/edit/:id',alunos.update);
	//app.post('/alunos/delete/:id',alunos.remove);
}
