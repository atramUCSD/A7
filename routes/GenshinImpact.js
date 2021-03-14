var data = require('../JSONS/GenshinImpactChapters.json');

exports.view = function(req, res){
    //console.log(data);
    res.render('GenshinImpact',data);
  };