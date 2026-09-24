/**
 * Part B4 - Data structures and algorithms (complex data types)
 * JavaScript Assessment 2
 */

/**
 * --------------
 * B4.2 - Define movie class
 * --------------
 */

class Movie {
    /**
     * Create a new Movie
     * @param {number} movieId - unique ID for the movie
     * @param {string} title - movie title
     * @param {number} year - year movie was released
     * @param {number} rating - movie rating out of 5
     */

    constructor(movieId, title, year, rating) {
        this.movieId = movieId;
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}
console.log(Movie);