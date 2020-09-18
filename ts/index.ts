const fs = require('fs');
const logjs = require('logjs');
const logger = new logjs.logger('default');

// standard transport
logger.transports.add(new logjs.transports.standard({
    colorized: true
}));

logger.error('hi');