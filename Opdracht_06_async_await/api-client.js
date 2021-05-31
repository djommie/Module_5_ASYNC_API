const fetch = require("node-fetch");

const API_KEY = 'a425dd8c404b77ed587b69abf3c6bde8'

async function getData() {
    const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
    try {
        const res = await fetch(apiUrl).then(response => response.json()).then(data => console.log(data));
        return res;
    }
    catch (error) {
        console.log(error);
    }
}

console.log(getData());