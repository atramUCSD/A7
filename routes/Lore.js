var data = require('../JSONS/LoreOlympus.json');


exports.view = function(req, res){
    //console.log(data);
    res.render('Lore',data);
  };