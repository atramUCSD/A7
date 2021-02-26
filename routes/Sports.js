var data = require('../Sports.json');

exports.view = function(req, res){
  res.render("Sports" , data);
}