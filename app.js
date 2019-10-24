var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
var home  		= require('./controllers/home');

var app 		= express();

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({extended:false}));

app.use('/', home);


// //ROUTING
// app.get('/', function(req, res){
// 	res.send('<h2>hello from express</h2>');
// });


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
