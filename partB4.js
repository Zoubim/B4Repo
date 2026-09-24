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

/**
 * ---------
 * B4.3 - Build an unsorted array of ten movies
 * -----------
 */

// movieList: ten Movie objects with unique IDs, deliberately left unsorted.
let initialList = [
    {movieId: 115, title: "The Shawshank Redemption", year: 1994, rating: 5 },
    {movieId: 113, title: "The Godfather", year: 1972, rating: 5 },
    {movieId: 111, title: "The Godfather: Part II", year: 1974, rating: 3 },
    {movieId: 112, title: "The Dark Knight", year: 2008, rating: 5 },
    {movieId: 120, title: "Krull", year: 1983, rating: 1 },
    {movieId: 121, title: "The Last Starfigher", year: 1981, rating: 1 },
    {movieId: 107, title: "The Longest Day", year: 1962, rating: 5 },
    {movieId: 103, title: "Blade Runner", year: 1982, rating: 3 },
    {movieId: 110, title: "Jaws", year: 1975, rating: 4},
    {movieId: 101, title: "Alien", year: 1979, rating: 5}
];

let movieList = new Movie(`list`, initialList);

console.log("B4.3 Unsorted movie array:");
console.log(movieList);
