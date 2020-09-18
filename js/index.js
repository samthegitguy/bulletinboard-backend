var fs = require('fs');
var logjs = require('logjs');
var logger = new logjs.logger('default');
// standard transport
logger.transports.add(new logjs.transports.standard({
    colorized: true
}));
logger.error('hi');
