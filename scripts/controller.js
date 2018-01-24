"use strict";


const factory = require('./factory');
const domInteraction = require('./dominteractions');
// const movieCardHBS = require('../templates/movieCard.hbs');
const onLoad = require('../templates/onLoad.hbs');
let movieData;



//this function is ran in our dom interactions module, in side of the key press function.
// we pass in the movie data, which has the ids property on each object. We use this id to make our ajax call for actors.
module.exports.castSetter = (movieData) => {
    return new Promise((resolve, reject) => {
        // set an empty array to push our movie data with actors added, to later print.
        let printMovieArray = [];
        // loop over each movie in our movie data (that comes from the search in dominteractions).
        movieData.forEach(movie => {
            // pass the movie ids into our getActors function, which runs an ajax call for each id.
            factory.getActors(movie.id)
                .then((actors) => {
                    // set an empty array where we will push the actors names.
                    let actorsArray = [];
                    // loop over the top 3 billed actors and push them to the actorsArray.
                    for (let i = 0; i < 3; i++) {
                        actorsArray.push(actors.cast[i].name);
                    }
                    // the join method takes all the elements in the array and returns it as a string.
                    movie.cast = actorsArray.join(", ");
                    //push the new data to 16.
                    printMovieArray.push(movie);
                    resolve(printMovieArray);

                });
        });
    });
};
module.exports.printOnLoad = () => {
    $('#container').append(onLoad());
};

//-----------------------------Get rating with rateYo-------------------------------

module.exports.getRating = () =>{
    $(document).on("click", ".rate", function() {
        console.log("click working", $(event.target).parents(".rate"));
        var rating = $(event.target).parents(".rate").rateYo("rating") * 2;
        console.log("Rating", (rating));
    });
};


module.exports.addMovieObjectToWatchlist = (movieId, userId) => {
    let userMovieObject = {};
    userMovieObject.id = movieId;
    userMovieObject.user = userId;
    userMovieObject.watched = false;
    userMovieObject.stars = 0;
    factory.addMovie(userMovieObject)
        .then(function (movie) {
            console.log("movie", movie);
        });
};