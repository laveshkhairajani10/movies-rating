let url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const image = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let title = document.getElementById("title");
logo = document.getElementById("logo");
categories = document.getElementById("category");
display = document.getElementById("info");
action = document.getElementById('Action');
romance = document.getElementById('Romance')
crime = document.getElementById('Crime')
adventure = document.getElementById('Adventrue')

let pageValue = 1;



getMovies(url);
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    respData.results.forEach((data) => {
        display.innerHTML += `
       
       <ul>
             <img id="image" src="${image + data.poster_path}" alt="" />
            <li id="title"> <span>Title:</span>   ${data.title}</li>
            </li>
            <li id="logo"><span>Rating:</span>  ${data.vote_average}</li>
        </ul>
            `;
    });
}

let categoires_btn = document.getElementById("categoires_btn");
let dropdown_content = document.getElementById("dropdown-content");

categoires_btn.addEventListener("click", () => {
    console.log("ok");
    dropdown_content.classList.toggle("active");
});

let right = document.getElementById("right");

right.addEventListener("click", nextPage);


async function nextPage() {
    pageValue++;
    let newurl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pageValue}`;
    const resp = await fetch(newurl);
    const respData = await resp.json();

    respData.results.forEach((data) => {
        display.innerHTML += `
       
       <ul>
             <img id="image" src="${image + data.poster_path}" alt="" />
            <li id="title"> <span>Title:</span>   ${data.title}</li>
            </li>
            <li id="logo"><span>Rating:</span>  ${data.vote_average}</li>
        </ul>
            `;
    });
}

function genre() {
    let genreurl = `https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    getMovies(genreurl)
    console.log('odsd');
}

pageValue++;
let newurl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pageValue}`;