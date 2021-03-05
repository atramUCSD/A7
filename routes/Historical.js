var data = require('../JSONS/Historical.json');

exports.view = function(req, res){
  res.render("Historical" , data);
}