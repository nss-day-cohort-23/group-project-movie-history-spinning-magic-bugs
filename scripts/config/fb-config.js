'use strict';

const fbCreds = require("./fb-creds");
console.log("fb creds",fbCreds);

const firebase = require("firebase/app");
require("firebase/auth");

const config = {
  apiKey: fbCreds.fbKey,
  authDomain: fbCreds.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;