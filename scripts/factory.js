

'use strict';
const movie = require('./config/secretKey.js');
// const fbURL = "https://console.firebase.google.com/project/magic-spinning-bugs/database";
const fbURL = 'https://magic-spinning-bugs.firebaseio.com/movies';


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

// module.exports.userMovieData = (data, id) => {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: `${fbURL}/watchList/${id}.json`,
//             method: 'PATCH',
//             data: JSON.stringify(data)
//         }).done((data) => {
//             console.log(data, "data");
//             resolve(data);
//         }).fail((error) => {
//             reject(error);
//         });
//     });
// };

// module.exports.deleteMovie = (id) => {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: `${fbURL}/watchList/${id}.json`,
//             method: 'DELETE',
//         }).done((data) => {
//             resolve(data);
//         }).fail((error) => {
//             reject(error);
//         });
//     });
// };

const firebase = require(`./config/fb-config`);
const auth = require('./user-factory');

module.exports.getUsersMovies = (uid) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${fbURL}.json?orderBy="user"&equalTo="${uid}"`
        })
            .done(data => {
                console.log('data', data);
                resolve(data);
            })
            .fail(error => {
                console.log("somethings gone wrong", error.statusText);
                reject(error);
            });
    });
};

module.exports.deleteUsersMovie = (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${fbURL}/${id}.json`,
            method: `DELETE`
        })
            .done(data => {
                resolve(data);
            })
            .fail(error => {
                console.log("somethings gone wrong", error.statusText);
                reject(error);
            });
    });
};

module.exports.addMovie = (movie) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${fbURL}.json`,
            method: "POST",
            data: JSON.stringify(movie)
        })
            .done(movieId => {
                resolve(movieId);
            });
    });
};
