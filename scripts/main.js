"use strict";


const domInteractions = require('./dominteractions');
const factory = require('./factory');
const controller = require('./controller');
const user = require('./user-factory');
const rate = require('./rateYo');
const firebase = require("firebase/app");
const fbURL = "https://console.firebase.google.com/project/magic-spinning-bugs/database";
// const onLoad = require('../templates/onLoad.hbs');
let searchedTerm = "";

controller.printOnLoad();
domInteractions.getSearchInput();

// user.authUser();
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

let userText = document.getElementById("search");
// controller.pressingEnter(userText);

$(document).on("click", ".watchlist", function () {
    console.log('hello');
    let currentUser = firebase.auth().currentUser;
    console.log('currentUser', currentUser);
    if (currentUser) {
        alert("Your selection was successfully added.");
        console.log('added to watchlist');
        let movieId = $(event.target).parent().attr("id");
        console.log('movieId = ', movieId);
        controller.addMovieObjectToWatchlist(movieId, currentUser.uid);
    } else
        alert("Please log in to continue..");
        console.log('uh');
});

$("#showUntracked").on("click", function () {
    console.log('hello');
    let currentUser = firebase.auth().currentUser;
    if (currentUser) {
        controller.showsUntrackedMovies(searchedTerm, currentUser.uid);
    } else
        alert("Please log in to continue..");
        console.log('uh');
});

$(document).on("click", "#showUnwatched", function () {
    console.log('hello');
    let currentUser = firebase.auth().currentUser;
    if (currentUser) {

    } else
        alert("Please log in to continue..");
        console.log('uh');
});

// userText.addEventListener("keypress", function (e) {
//     var key = e.keyCode;
//     if (key === 13) {
//         searchedTerm = userText.value;
//         controller.searchedMovie(searchedTerm);
//     }
// });