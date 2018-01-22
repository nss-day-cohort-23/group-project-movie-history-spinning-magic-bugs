"use strict";

const $ = require('jquery');
const factory = require('./factory');
const domInteraction = require('./dominteractions');


let movieIdArray = [];
//this function is ran in our dom interactions module, in side of the key press function.
//it takes in the array of movie IDs, loops over them and makes an ajax call for each ID. This returns us with the cast and crew for each movie searched.
module.exports.castSetter = (movieIdArray) => {
    movieIdArray.forEach((movieId => {
        factory.getActors(movieId)
            .then((actors) => {
            });
    }));
};