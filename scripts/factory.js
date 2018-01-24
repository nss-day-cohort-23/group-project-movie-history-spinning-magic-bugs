

'use strict';
const movie = require('./config/secretKey.js');
const fbURL = "https://console.firebase.google.com/project/magic-spinning-bugs/database";



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

module.exports.userMovieData = (data, id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${fbURL}/watchList/${id}.json`,
            method: 'PATCH',
            data: JSON.stringify(data)
        }).done((data) => {
            console.log(data, "data");
            resolve(data);
        }).fail((error) => {
            reject(error);
        });
    });
};

module.exports.deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${fbURL}/watchList/${id}.json`,
            method: 'DELETE',
        }).done((data) => {
            resolve(data);
        }).fail((error) => {
            reject(error);
        });
    });
};

// module.exports.addToWatchList = (movieObj) => {
//     return new Promise( (resolve, reject) => {
//         $.ajax({
//             url: ,
//             method: "POST",
//             data: JSON.stringify(movieObj)
//         }).done( movie => {
//             resolve(movie);
//         }).fail( error => {
//             reject(error);
//         });
//     });
// };

// module.exports.getMovies = (uid) => {
//     return new Promise( (resolve, reject) => {
//         $.ajax({
//             url: `${uid}"`,
//         }).done( movie => {
//             resolve(movie);
//         }).fail( error => {
//             reject(error);
//         });
//     });
// };
