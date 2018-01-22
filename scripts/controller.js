"use strict";

const $ = require('jquery');
const factory = require('./factory');
const domInteraction = require('./dominteractions');
let movieData;



let movieIdArray = [];
//this function is ran in our dom interactions module, in side of the key press function.
//it takes in the array of movie IDs, loops over them and makes an ajax call for each ID. This returns us with the cast and crew for each movie searched.
module.exports.castSetter = (movieIdArray, movieData) => {
    
        movieIdArray.forEach(movieId => {
            
            factory.getActors(movieIdArray)
            .then((actors) => {
                movieData.forEach(()=>{
                    console.log("stuff",actors);
                    // for (let i=0;i<4;i++){
                        if (actors.id === movieData.id){
                            movieData.cast = actors.cast;
                        // }
                    }
                });
            console.log(movieData);
        });
    });
};





