'use strict'

const appEventEmitter = require('../appEventEmitter');
const liveLogins = require('../notifications/liveLogins');

//Dummy impl; ideally it will read a que and emit event for a specific user
setInterval(() => {
    let allLiveLogins = liveLogins.getAll();
    for(let i = 0; i < allLiveLogins.length; i++){
        if(allLiveLogins[i].userId <= 5){
            appEventEmitter.emit('ready', allLiveLogins[i].userId);
        } else {
            appEventEmitter.emit('preview', allLiveLogins[i].userId);
        }
    }
}, 5000);
