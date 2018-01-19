'use strict';
const movie = require('./config/secretKey.js');

let $ = require("jquery");

module.exports.getMovieDB = () => {
    return new Promise ((resolve,reject) => {
        $.ajax({
            url:`//api.themoviedb.org/3/search/movie?api_key=${movie.movieKey}&query=Jack+Reacher`
        })
            .done((test) => {
                console.log("my movies",test);
            });
    });
};