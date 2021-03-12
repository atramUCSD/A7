var data = require('../JSONS/TrueBeautyChapters.json');

exports.view = function(req, res){
  res.render("TrueBeauty",data);
}