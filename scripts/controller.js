"use strict";

const $ = require('jquery');
const factory = require('./factory');
const domInteraction = require('./dominteractions');


let movieIdArray = [];

module.exports.castSetter = (movieIdArray) => {
    console.log(movieIdArray, "actors pls");
    movieIdArray.forEach((movieId => {
        console.log("joe said so");
        factory.getActors(movieId)
            .then((actors) => {
            });
    }));
};