'use strict';
const movie = require('./config/secretKey.js');

let $ = require("jquery");

module.exports.getMovieDB = () => {
    return new Promise ((resolve,reject) => {
        $.ajax({
            url:`//api.themoviedb.org/3/movie/550?api_key=${movie.movieKey}`
        })
            .done((test) => {
                console.log("my movies",test);
            });
    });
};