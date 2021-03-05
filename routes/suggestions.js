var data = require("../JSONS/Suggestions.json");

exports.suggest = function(request, response) {
	var newNovel = {
		"title": request.query.title,
		"tag": request.query.tag,
		"imageURL": "https://lorempixel.photos/400/400/people"
	}
  	data.novels.push(newNovel)
  	response.render('suggestionsPage', data)
}