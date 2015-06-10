// GET /quizes/question
exports.question = function(req,res){
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

exports.answer = function(req, res){
	if (req.query.respuesta === 'Roma') {
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};
/*esa variable pregunta se la estamos enviando a las vistas en la
carpeta quizes dentro de views*/
