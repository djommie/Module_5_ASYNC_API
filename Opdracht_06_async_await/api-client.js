const API_KEY = '?api_key=a425dd8c404b77ed587b69abf3c6bde8';

async function getGenres() {
    const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
    try {
        const response = await fetch(apiUrl + API_KEY);
        const genres = await response.json();
        await createGenreList(genres.genres);
    }
    catch (error) {
        console.log(error);
    }
}

async function getFavorite() {
    const apiUrl = `https://api.themoviedb.org/3/find/tt0111161${API_KEY}&language=en-US&external_source=imdb_id`;
    try {
        const response = await fetch(apiUrl);
        const movie = await response.json();
        const movie_results = movie.movie_results;
        createFavorite(movie_results[0].title);
    } catch (error) {
        console.log(error);
    }

}

async function getTopRated() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=popularity.desc&include_adult=false&page=1`;
    try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        const top20 = movies.results;
        createTop10(top20)
    } catch (error) {
        console.log(error);
    }
}

async function getTopAction() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=popularity.desc&include_adult=false&page=1&with_genres=28`;
    try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        createTop10Action(movies.results);
    } catch (error) {
        console.log(error);
    }
}

async function getTop1975() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=1975`;
    try {
        const response = await fetch(apiUrl);
        const movies = await response.json();
        createTop1975(movies.results)
    } catch (error) {
        console.log(error);
    }
}

function createGenreList(data) {
    itemlist = document.getElementById('genre_list');
    data.forEach(item => {
        itemlist.innerHTML += `<li>Genre naam: ${item.name}, id: ${item.id}</li>`;
    })
}

function createFavorite(fav) {
    para = document.getElementById('favorite');
    para.innerHTML += fav;
}

function createTop10(movies) {
    itemlist = document.getElementById('top10');
    for (i = 0; i < 10; i++) {
        itemlist.innerHTML += `<li>${movies[i].title}</li>`;
    }
}

function createTop1975(movies) {
    itemlist = document.getElementById('top1975');
    for (i = 0; i < 10; i++) {
        itemlist.innerHTML += `<li>${movies[i].title}</li>`;
    }
}

function createTop10Action(movies) {
    itemlist = document.getElementById('top_action');
    for (i = 0; i < 10; i++) {
        itemlist.innerHTML += `<li>${movies[i].title}</li>`;
    }
}

document.addEventListener("DOMContentLoaded", getGenres(), getFavorite(), getTopRated(), getTopAction(), getTop1975());
