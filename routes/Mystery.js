var data = require('../JSONS/Mystery.json');

exports.view = function(req, res){
  res.render("Mystery" , data);
}