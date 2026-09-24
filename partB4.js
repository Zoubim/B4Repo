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

/**
 * ----------------
 * B4.4 - Sort the array by movieId in ascending order
 * -----------------
 */

/**
 * sortByMovieId
 * Returns a new array of movies ordered by movieId
 * @param inputArray - movie list array unorder
 * @returns {sortedArray} - a new array in ascending movieId order
 * Will need to specify to the function to order it by movieId
 */
function sortByMovieId(inputArray) {
    const sortedArray = [...inputArray];
    sortedArray.sort(function (a, b) {
        return a.movieId - b.movieId;
    });
    return sortedArray;
}
const sortedMovies = sortByMovieId(initialList);
console.log("B4.4 Movie array sorted by movieId:");
console.log(sortedMovies);


/**
 * -----------
 * B4.5 - Search algorithm (sequential or binary)
 * -----------
 */

/**
 * binarySearch
 * Searches a movie array that is already sorted by movieId by
 * halving the search range. 
 * @param searchArray - array of movies sorted by movieId
 * @param {number} targetId - movieId being searched for
 * @returns matching movie or null if not found
 */

function binarySearch(searchArray, targetId) {
    let lowI = 0;
    let highI = searchArray.length - 1;
    while (lowI <= highI) {
        const middleI = Math.floor((lowI + highI)/2);
        if (searchArray[middleI].movieId === targetId) {
            return searchArray[middleI];
        }
        if (searchArray[middleI].movieId < targetId) {
            lowI = middleI + 1;
        } else {
            highI = middleI - 1;
        }
    }
    return null;
}

console.log("B4.5 Search for movie ID 115 (found)    :", binarySearch(sortedMovies, 115));
console.log("B4.5 Search for movie ID 500 (not found):", binarySearch(sortedMovies, 500));