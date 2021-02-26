var data = require('../Horror.json');

exports.view = function(req, res){
  res.render("Horror" , data);
}