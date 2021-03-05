var data = require('../JSONS/Horror.json');

exports.view = function(req, res){
  res.render("Horror" , data);
}