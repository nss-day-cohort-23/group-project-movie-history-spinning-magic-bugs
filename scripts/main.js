"use strict";


const domInteractions = require('./dominteractions');
const factory = require('./factory');
let controller = require('./controller');

const $ = require('jquery');
const user = require('./user-factory');





domInteractions.getSearchInput();

user.authUser();

