
/*
 * GET second page.
 */

var data = require('../JSONS/data.json');

exports.view = function(req, res){
  res.render("secondPage" , data);
}