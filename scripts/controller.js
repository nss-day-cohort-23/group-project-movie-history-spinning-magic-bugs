"use strict";

const $ = require('jquery');
const factory = require('./factory');
const domInteraction = require('./dominteractions');


let movieIdArray = [];

// let get = () => {
    
//         });
//     };

module.exports.castSetter = () => {
    console.log(movieIdArray, "actors pls");
    movieIdArray.forEach((movieIdArray => {
    factory.getActors()
        .then((actors) => {
        });
    }));
};