var data = require('../JSONS/Romance.json');

exports.view = function(req, res){
  res.render("Romance" , data);
}