"use strict";


const domInteractions = require('./dominteractions');
const factory = require('./factory');
const $ = require('jquery');

let movieName = domInteractions.searchInput();


console.log(factory.getActors());

console.log("main js");

domInteractions.getSearchInput();