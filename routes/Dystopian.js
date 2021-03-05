var data = require('../JSONS/Dystopian.json');

exports.view = function(req, res){
  res.render("Dystopian" , data);
}