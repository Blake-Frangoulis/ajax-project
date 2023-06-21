const topAnime = [];
const topManga = [];

function getTopAnime() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.jikan.moe/v4/top/anime');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i <= 24; i++) {
      topAnime.push(xhr.response.data[i]);
    }
  });
  xhr.send();
}

getTopAnime();

function getTopManga() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.jikan.moe/v4/top/manga');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i <= 24; i++) {
      topManga.push(xhr.response.data[i]);
    }
  });
  xhr.send();
}

getTopManga();
