"use strict";


const domInteractions = require('./dominteractions');
const factory = require('./factory');
const $ = require('jquery');
const user = require('./user-factory');

console.log("main js");

domInteractions.getSearchInput();

user.authUser();
