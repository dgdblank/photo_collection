var express = require('express');
var app = express();

// configure server with middleware and routing
require('./middleware.js')(app, express);

// server static files
app.use(express.static(__dirname + '/../public'));

app.set("port", 3002);

app.listen(app.get("port"), function() {
	console.log("Listening on " + app.get("port"));
});

module.exports = app;