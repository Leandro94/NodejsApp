module.exports = function()
{
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var ProfessorSchema =  new Schema(
	{
		nome:String,
		data_vinculo: {type: Date, default: Date.now},
		curso_atuante:String,
		formacao:String
	});
	return mongoose.model('Professores', ProfessorSchema);
}

