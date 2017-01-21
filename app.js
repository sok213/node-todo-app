// Declare varibales.
var express         = require('express'),
    mongoose        = require('mongoose'),
    config          = require('./config'),
    setupController = require('./controllers/setupController'),
    app             = express(),
    port            = process.env.PORT || 3000;

// Set the assets to be piped into html files.
app.use('/assets', express.static(__dirname + '/public'));

// Set the engine for ejs files.
app.set('view engine', 'ejs');

// Connect to the mLab URI string provided by ./config/index.js
// via modules.exports.
mongoose.connect(config.getDbConnectionString());

// Calls the function provided by ./controllers/etupController.js
// and passes in the express app in order for the function to send a 
// response.
setupController(app);

// listens to the port.
app.listen(port);