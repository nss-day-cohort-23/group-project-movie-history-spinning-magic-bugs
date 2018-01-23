

'use strict';
const movie = require('./config/secretKey.js');




let $ = require("jquery");



module.exports.getMovieDB = (movieName) => {
    return new Promise ((resolve,reject) => {
        $.ajax({
            url:`//api.themoviedb.org/3/search/movie?api_key=${movie.movieKey}&query=${movieName}`
        })
            .done((movieData) => {

                console.log("my movies",movieData.results);
                
                resolve(movieData.results);
            });
    });
};

module.exports.getActors = (movieID) => {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url:`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${movie.movieKey}`
    })
        .done((actors) => {
            // lists our actors!
            // console.log("my actors", actors);
            resolve(actors);
        });
    });
};
