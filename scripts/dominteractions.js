"use strict";

const $ = require('jquery');
const _ = require('lodash');

let factory = require('./factory');
let controller = require('./controller');

console.log("dom interactions running");
let movieIdArray;

let castSetter = (movieIdArray) => {
    console.log(movieIdArray, "actors pls");
    movieIdArray.forEach((movieId => {
        console.log("joe said so");
        factory.getActors(movieId)
        .then((actors) => {
            });
    }));
};

module.exports.getSearchInput = () =>{
    $("#search").keypress(function(e){
       
    
        if (e.which === 13){

            // console.log("enter running");
        
            let searchValue = $('#search').val();

            // console.log("searchValue",searchValue);

            let movieName = _.replace(searchValue,' ',`+`);
            // console.log("movie name",movieName);
            factory.getMovieDB(movieName)
                .then(function(movieData){
                    movieIdArray = [];
                    movieData.forEach(movie => { 
                        movieIdArray.push(movie.id);
                    });
                    console.log("cast stter", movieIdArray);
                    setTimeout(() => {
                        castSetter(movieIdArray);
                        
                    }, 2000);
                    //  console.log("movie data",movieIdArray);
            // controller.castSetter(movieData);
            
                });

        }      
    });
};

