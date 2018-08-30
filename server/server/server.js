'use strict'

const logger = require('./logger');
const {port} = require('./config');
const httpServer = require('./httpServer');
require('./worker/worker');//dummy impl just to start worker thread and emit events


httpServer.listen(port, (error) => {
    if(error){
        return logger.error('Error while starting...', error);
    }
    logger.info(`server started at port : ${port}`);
})




