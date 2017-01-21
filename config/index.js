// Gets the config file.
var configValues = require('./config');

// Exports the mLab URI from concatenating variables pulled from
// the config file.
module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.username +
    ':' + configValues.pwd + 
    '@ds117839.mlab.com:17839/testtodoapp';
  }
};