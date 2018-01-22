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

                    // create empty array to push IDs to
                    movieIdArray = [];
                    // loops over the data retrieved from search, for each movie, pushes the id to the ID array.
                    movieData.forEach(movie => { 
                        movieIdArray.push(movie.id);
                    });
                    // sets a 2 second time out so that the castSetter function can get the data properly. Could not figure out another way?
                    setTimeout(() => {
                        // run the castSetter function from controller, which loops through the ids and makes ajax calls to get the cast!
                        controller.castSetter(movieIdArray, movieData);
                        
                    }, 2000);        
            });
        }      
    });
};

// module.exports.getMovieId = ()=>{
//     factory.
// };