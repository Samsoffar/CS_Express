var express = require('express');
var app = express();

// app.get('/', function(request, response){

// 	response.sendFile(__dirname +'/public/index.html')
// });
app.use(express.static('public'));

app.listen(3000, function (){
	console.log("listening on port 3000, using static ");
});