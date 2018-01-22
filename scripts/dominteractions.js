"use strict";

const $ = require('jquery');
const _ = require('lodash');

let factory = require('./factory');
let controller = require('./controller');

console.log("dom interactions running");
let movieIdArray;

module.exports.getSearchInput = () =>{
    $("#search").keypress(function(e){
       
    
        if (e.which === 13){        
            let searchValue = $('#search').val();
            let movieName = _.replace(searchValue,' ',`+`);
            factory.getMovieDB(movieName)
                .then(function(movieData){
                    movieIdArray = [];
                    movieData.forEach(movie => { 
                        movieIdArray.push(movie.id);
                    });
                    console.log("cast stter", movieIdArray);
                    setTimeout(() => {
                        controller.castSetter(movieIdArray);
                        
                    }, 2000);
                });
        }      
    });
};

