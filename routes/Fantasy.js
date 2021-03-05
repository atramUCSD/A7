var data = require('../JSONS/Fantasy.json');

exports.view = function(req, res){
  res.render("Fantasy" , data);
}