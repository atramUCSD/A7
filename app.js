
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var TrueBeauty = require('./routes/TrueBeauty')
var Wind = require('./routes/Wind')
var Dragon = require('./routes/Dragon')
var FNAF1 = require('./routes/FNAF1')
var FNAF2 = require('./routes/FNAF2')
var Lore = require('./routes/Lore')
var DatingWTail = require('./routes/DatingWTail')
var GenshinImpact = require('./routes/GenshinImpact')
var KingsAvatar = require('./routes/KingsAvatar')
var Haikyuu = require('./routes/Haikyuu')
var index = require('./routes/index');
var suggestions = require('./routes/suggestions');
var secondPage = require('./routes/secondPage');
var Horror = require('./routes/Horror');
var Sports = require('./routes/Sports');
var Romance = require('./routes/Romance');
var Adventure = require('./routes/Adventure');
var Fantasy = require('./routes/Fantasy');
var Mystery = require('./routes/Mystery');
var Historical = require('./routes/Historical');
var Dystopian =require('./routes/Dystopian');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/Romance/TrueBeauty', TrueBeauty.view);
app.get('/Historical/Wind', Wind.view);
app.get('/Historical/Dragon', Dragon.view);
app.get('/Fantasy/LoreOlympus', Lore.view);
app.get('/Sports/Haikyuu', Haikyuu.view)
app.get('/Romance/DatingWTail', DatingWTail.view);
app.get('/Fantasy/GenshinImpact', GenshinImpact.view)
app.get('/Sports/KingsAvatar', KingsAvatar.view)
app.get('/Horror/FNAF1', FNAF1.view)
app.get('/Horror/FNAF2', FNAF2.view)
app.get('/', index.view);
app.get('/suggestionsPage', suggestions.suggest);
app.get('/secondPage', secondPage.view);
app.get('/Horror', Horror.view);
app.get('/Romance', Romance.view);
app.get('/Sports', Sports.view);
app.get('/Adventure', Adventure.view);
app.get('/Fantasy', Fantasy.view);
app.get('/Mystery', Mystery.view);
app.get('/Historical', Historical.view);
app.get('/Dystopian', Dystopian.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
