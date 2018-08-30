'use strict'

const NotificationManager = require('./notifications/notificationManager');
const events = require('events');


const appEventEmitter = new events.EventEmitter();
appEventEmitter.on('ready', (userId) => {
    let notifier = new NotificationManager();
    notifier.notify(userId, 'ready');
});

appEventEmitter.on('preview', (userId) => {
    let notifier = new NotificationManager();
    notifier.notify(userId, 'preview');
});

module.exports = appEventEmitter;



