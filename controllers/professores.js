module.exports = function(app) 
{
	var Professor = app.models.professores;
	var ProfessoresController = 
	{
	  	index: function(req, res)
	 	{
	 		Professor.find(function(err,data)
	 		{
	 			if(err)
	 			{
	 				 console.log('Erro: '+err+' ao listar na index!');
	 			}
	 			res.render('professores/index', {lista: data});
	 		});
			
		},
		create: function(req,res)
		{
			res.render("professores/create");
		},
		insert: function(req, res)
		{
			var model = new Professor(req.body);
			model.save(function(err)
			{
				if(err)
				{
					console.log(err);
				}
				res.redirect('/professores');
			});
		},
		edit: function(req, res)
		{
			Professor.findById(req.params.id, function(err, data)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.render('professores/edit',{value: data});
				}
			});
		},
		update: function(req, res)
		{
			Professor.findById(req.params.id, function(err, data)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					var model = data;
					model.nome = req.body.nome;
					model.curso_atuante = req.body.curso_atuante;
					model.formacao = req.body.formacao;
					model.save(function(err)
					{
						if(err)
						{
							console.log(err);
						}
						else
						{
							res.redirect('/professores');
						}
					});
				}
			});
		},
		remove: function(req, res)
		{
			Professor.remove({_id: req.params.id}, function(err)
			{
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.redirect('/professores');
				}
			});
		}
	}
		
	return ProfessoresController;
};
