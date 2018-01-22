"use strict";


const domInteractions = require('./dominteractions');
const factory = require('./factory');

let movieName = domInteractions.searchInput();


console.log(factory.getActors());