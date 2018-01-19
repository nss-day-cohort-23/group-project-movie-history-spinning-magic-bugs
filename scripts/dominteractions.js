"use strict";

const $ = require('jquery');
const _ = require('lodash');

let factory = require('./factory');

console.log("dom interactions running");

module.exports.searchInput = () =>{
    $("#search").keypress(function(e){
    
        if (e.which === 13){

            console.log("enter running");
        
            let searchValue = $('#search').val();

            console.log("searchValue",searchValue);

            let movieName = _.replace(searchValue,' ',`+`);
            console.log("movie name",movieName);
            factory.getMovieDB(movieName);
        }      
    });
};