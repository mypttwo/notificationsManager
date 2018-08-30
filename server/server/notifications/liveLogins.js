"use strict";

const LoginData = require('./loginData');
const NotificationAppType = require('./notificationAppType');

let list = [];

const liveLogins = {
  add : function(login){
    let existing = this.get(login.userId, login.notificationAppType);
    if (!existing.length) {
      list.push(login);
    }
  },
  remove : function(login){
    list = list.filter(_login => login.userId !== _login.userId || login.notificationAppType !== _login.notificationAppType);
  },
  get : function(userId, notificationAppType) {
    return list.filter(_login => userId === _login.userId && notificationAppType === _login.notificationAppType);
  },
  getByUserId : function(userId){
    return list.filter(_login => userId === _login.userId);
  },
  getAll : function(){
    return list;
  }
}

module.exports = Object.freeze(liveLogins);
