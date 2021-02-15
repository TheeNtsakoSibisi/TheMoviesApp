const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=original_title.desc&api_key=97f722f59474aebe48831c3c90b71bc1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=97f722f59474aebe48831c3c90b71bc1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
        const releaseDate = document.createElement('h3');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        releaseDate.innerHTML = `${element.release_date}`;
        el.appendChild(image);
        el.appendChild(text);
        el.appendChild(releaseDate);
        main.appendChild(el);
    }); 
});
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});
