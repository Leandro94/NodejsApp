module.exports = function()
{
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var AlunoSchema =  new Schema(
	{
		nome:String,
		data_matricula: {type: Date, default: Date.now},
		matricula: String,
		curso:String,
		turno:String,
		periodo:String
	});
	return mongoose.model('Alunos', AlunoSchema);
}

