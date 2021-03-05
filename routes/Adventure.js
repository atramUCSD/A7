var data = require('../JSONS/Adventure.json');

exports.view = function(req, res){
  res.render("Adventure" , data);
}