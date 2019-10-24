var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
var home  		= require('./controllers/home');
var category  		= require('./controllers/category');
var movie  		= require('./controllers/movie');
var request  		= require('./controllers/request');



var app 		= express();

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({extended:false}));

app.use('/', home);

app.use('/category', category);
app.use('/movie', movie);
app.use('/request', request);



// //ROUTING
// app.get('/', function(req, res){
// 	res.send('<h2>hello from express</h2>');
// });


//SERVER STARTUP
app.listen(3000, function(){
	console.log('server started at 3000...');
});
