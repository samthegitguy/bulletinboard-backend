/*
Node.js server which allows chat between anonymous users
Copyright (C) 2020 samthegitguy

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see https://github.com/samthegitguy/bulletinboard/blob/master/LICENSE
 */
const fs = require('fs');
const logjs = require('logjs');
const logger = new logjs.logger('default');
const http = require('http');

// standard transport
logger.transports.add(new logjs.transports.standard({
    colorized: true
}));


logger.info('Server starting');

http.createServer(function (req, res) {
    res.writeHead(418, {'Content-Type': 'text/html'});
    res.end(`
        I am a teapot, short and stout <br/>
        Tip me over and pour me out <br/> <br/>
        Teapot server v1.0.0 (c) me running on node.js <br/>
        <script> 
            prompt("hello");
        </script>`);
}).listen(8080);

logger.info('Backend ready');

logger.info('Server started successfully');

logger.info('Starting REPL mode');
logger.warn(`
bulletinboard Copyright (C) 2020 samthegitguy
This program comes with ABSOLUTELY NO WARRANTY; for details type 'show w'.
This is free software, and you are welcome to redistribute it
under certain conditions; type 'show c' for details.`);

