"use strict";

const firebase = require("./config/fb-config");
console.log("firebase",firebase);
module.exports.authUser = () => {
const provider = new firebase.auth.GoogleAuthProvider();

return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result){
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("result",result);
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log("error",error);
    });
};

module.exports.logout = () => {
return firebase.auth().signOut();
};