var data = require('../JSONS/Dragon.json');

exports.view = function(req, res){
    //console.log(data);
    res.render('Dragon',data);
  };