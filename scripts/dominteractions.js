"use strict";

const $ = require('jquery');
const _ = require('lodash');

console.log("dom interactions running");

module.exports.searchInput = () =>{
    document.getElementById("search").keypress(function(e){
    
        if (e.which== 13){

        console.log("enter running");
        
        let searchValue = $('.search').value;

        console.log("searchValue");

        let movieName = _.replace(searchValue,' ',`+`);
    }      
});
};