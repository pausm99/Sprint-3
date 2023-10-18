// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(film => film.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(film => film.director === director);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = getMoviesFromDirector(array, director);
  let result = moviesDirector.reduce((average, movie) => (average + movie.score), 0);
  result = Number((result/moviesDirector.length).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [...array];

  result = result.sort((film1, film2) => {
    if (film1.title > film2.title) return 1;
    else if (film1.title < film2.title) return -1;
    else return 0
  }).map(film => film.title).slice(0,20);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arraySorted = [...array];
  arraySorted.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else {
      if (a.title > b.title) return 1;
      else return -1;
    }
  });
  return arraySorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let result = array.filter(film => film.genre.includes(category))
                    /*.reduce((accumulator, film) => {
                      accumulator + film.score
                    }, 0);*/
  let number = result.length;
  if (number === 0) return 0.00;
  else {
    result = result.reduce((average, movie) => (average + movie.score), 0).toFixed(2);
    result = Number((result/number).toFixed(2));
    return result;
  }
  
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
