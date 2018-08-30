'use strict'

const socketio = require('socket.io');

const logger = require('./logger');
const liveLogins = require('./notifications/liveLogins');
const LoginData = require('./notifications/loginData');

let io = null;

const socketSetupHelper = (socket) => {
    logger.info(`User ${socket.handshake.query['userId']} connected from ${socket.handshake.query['appType']}` );
    let loginData = new LoginData(+socket.handshake.query['userId'], +socket.handshake.query['appType']);
    liveLogins.add(loginData);
    socket.join(loginData.userId)
    logger.info(`socket setup for user ${loginData.userId}`);
}

const server = {
    setup : function(httpServer){
        io = socketio(httpServer);
        io.on('connection', (socket) => {
            socketSetupHelper(socket);    
            
            //Setup other events here....
            
            socket.on('disconnect', (userId, appType) => {
                let loginData = new LoginData(userId, appType);
                liveLogins.remove(loginData);
                socket.leave(userId);
                logger.info(`User ${userId} from ${appType} disconnected`);
            })
        });
        return io;
    },
    notify : function(userId, event){
        if(!io){
            logger.error('socket is not setup');
            return;
        }
        io.sockets.in(userId).emit('notify', {event});
        logger.info(`sent ${event} to ${userId}`);
    }
}

module.exports = Object.freeze(server);