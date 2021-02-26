var data = require('../Romance.json');

exports.view = function(req, res){
  res.render("Romance" , data);
}