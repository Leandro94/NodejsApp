module.exports = function(app) 
{
	var Aluno = app.models.alunos;
	var AlunosController = 
	{
	  	index: function(req, res)
	 	{
	 		Aluno.find(function(err,data)
	 		{
	 			if(err)
	 			{
	 				 console.log('Erro: '+err+' ao listar na index!');
	 			}
	 			res.render('alunos/index', {lista: data});
	 		});
			
		},
		create: function(req,res)
		{
			res.render("alunos/create");
		},
		insert: function(req, res)
		{
			var model = new Aluno(req.body);
			model.save(function(err)
			{
				if(err)
				{
					console.log(err);
				}
				req.flash('info','Aluno cadastrado com sucesso!');
				res.redirect('/alunos');
			});
		},
		edit: function(req, res)
		{
			Aluno.findById(req.params.id, function(err, data)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.render('alunos/edit',{value: data});
				}
			});
		},
		update: function(req, res)
		{
			Aluno.findById(req.params.id, function(err, data)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					var model = data;
					model.nome = req.body.nome;
					model.matricula = req.body.matricula;
					model.curso = req.body.curso;
					model.turno = req.body.turno;
					model.periodo = req.body.periodo;
					model.save(function(err)
					{
						if(err)
						{
							console.log(err);
						}
						else
						{
							req.flash('info','Aluno alterado com sucesso!');
							res.redirect('/alunos');
						}
					});
				}
			});
		},
		remove: function(req, res)
		{
			Aluno.remove({_id: req.params.id}, function(err)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					req.flash('info','Aluno excluído com sucesso!');
					res.redirect('/alunos');
				}
			});
		}
	}
		
	return AlunosController;
};
/*
		create: function(req, res)
		{
			/*var model = new Aluno
			({\
				nome:'Jeferson', 
				matricula:'3343434',
				curso:'Administração',
				turno:'Diurno',
				periodo:'7º'
			});

			model.save(function(err, data)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(data);
				}
			})
			res.render("alunos/create");
			
		},*/
		/*lista: function(req, res)
		{
			Aluno.find(function(err, data)
			{
				if(err)
				{
					console.log('Erro: '+err+' ao buscar alunos!');
				}
				else
				{
					res.json(data);
				}
				
			});
		}
	};*/