// express import
var express  = require('express');

// initilize express constructor
var app      = express();

// port configuration
var port  	 = process.env.PORT || 3000;

// define the port to use
app.use(express.static(__dirname + '/website'));
// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/website/index.html');
});
app.listen(port);
console.log('App listening on port ' + port);
