"use strict";

const $ = require('jquery');
const _ = require('lodash');
const movieCardHBS = require('../templates/movieCard.hbs');
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
                    // sets a 1 second time out so that the castSetter function can get the data properly. Could not figure out another way?
                    setTimeout(() => {
                        // run the castSetter function from controller, which loops through the ids and makes ajax calls to get the cast!
                        controller.castSetter(movieData)
                        // .then on the castSetter promise, though we still had to use a 1 second time out to get all the data????
                        .then(printMoviesArray => {
                            setTimeout(() =>{ 
                                $('#cards').empty();
                                printMoviesArray.forEach(movie => {
                                    $('#cards').append(movieCardHBS(movie));
                                    });
                            }, 500);
                        });
                        });
                    }, 500);
                }
            });
            
        };

        //beginning to attach listeners on star
        $(document).on("click", function(){
            if(event.current.id === "fa fa-star 1" ){
                console.log("click working");
            } 
        });




