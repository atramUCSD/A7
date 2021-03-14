var data = require('../JSONS/DatingWTail.json');

exports.view = function(req, res){
    //console.log(data);
    res.render('DatingWTail',data);
  };