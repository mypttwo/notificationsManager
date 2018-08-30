'use strict'

const express = require('express')();
const cors = require('cors');
const http = require('http');
const logger = require('./logger');
const socketServer = require('./socketServer');

express.use(cors);
const httpServer = http.createServer(express);
logger.info('httpServer set up');

socketServer.setup(httpServer);
logger.info('socketServer set up');

module.exports = httpServer;

