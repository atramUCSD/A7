var data = require('../JSONS/Sports.json');

exports.view = function(req, res){
  res.render("Sports" , data);
}