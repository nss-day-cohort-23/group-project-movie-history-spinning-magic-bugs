

'use strict';
const movie = require('./config/secretKey.js');




let $ = require("jquery");

module.exports.getMovieDB = (movieName) => {
    return new Promise ((resolve,reject) => {
        $.ajax({
            url:`//api.themoviedb.org/3/search/movie?api_key=${movie.movieKey}&query=${movieName}`
        })
            .done((test) => {
                console.log("my movies",test);
            });
    });
};

module.exports.getActors = (movieID) => {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url:`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${movie.movieKey}`
    })
        .done((actors) => {
            console.log("my actors", actors);
        });
    });
};