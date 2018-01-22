"use strict";


const domInteractions = require('./dominteractions');
const factory = require('./factory');
let controller = require('./controller');

const $ = require('jquery');

const user = require('./user-factory');
const firebase = require("firebase/app");
const fbURL = "https://console.firebase.google.com/project/magic-spinning-bugs/database";

domInteractions.getSearchInput();

user.authUser();
firebase.auth().onAuthStateChanged(() => {
    console.log("Who is our user?", firebase.auth().currentUser);
});

$("#auth-btn").click(() => {
    user
    .authUser()
    .then(function(result) {
        let user = result.user;
        console.log("user", user);
        // displayWatchlist(user.uid);
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error", error);
    });
});

$("#signout-btn").click( () => {
    user.logout()
    .then( () => {
    console.log('logged out!', firebase.auth().currentUser);

    });
});
