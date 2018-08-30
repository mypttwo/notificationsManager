'use strict'

const logger = require('../logger');
const liveLogins = require('./liveLogins');
const NotificationAppType = require('./notificationAppType');
const socketServer = require('../socketServer');

class NotificationManager {
    notify(userId, event){
        let userLiveLogins = liveLogins.getByUserId(userId);
        userLiveLogins.forEach((userLogin) => {
            switch (userLogin.notificationAppType) {
                case NotificationAppType.WEB: {
                    socketServer.notify(userId, event);
                    break;
                }
                case NotificationAppType.API: {
                    //publish to web hook
                    break;
                }
                case NotificationAppType.ANDROID: {
                    //push notification to Android
                    break;
                }
                case NotificationAppType.IOS: {
                    //push notification to IOS
                    break;
                }
                default: {
                    logger.error(`Unknown notificationAppType : ${userLogin.notificationAppType}`);
                    break;
                }
            }
        })
    }
}

module.exports = NotificationManager;