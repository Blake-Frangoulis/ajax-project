const $topAnimeList = document.querySelector('.top-anime-list');
const $topMangaList = document.querySelector('.top-manga-list');
const $animeAnchor = document.querySelector('.anime-anchor');
const $mangaAnchor = document.querySelector('.manga-anchor');
const $topAnimeHeader = document.querySelector('.top-anime-header');
const $topMangaHeader = document.querySelector('.top-manga-header');
const $loadingScreen = document.querySelector('.loading-screen');
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

function viewSwap(view) {
  if (view === 'top-anime-list') {
    $topAnimeHeader.classList.remove('hidden');
    $topMangaHeader.classList.add('hidden');
    $topAnimeList.classList.remove('hidden');
    $topMangaList.classList.add('hidden');
  } else if (view === 'top-manga-list') {
    $topAnimeHeader.classList.add('hidden');
    $topMangaHeader.classList.remove('hidden');
    $topAnimeList.classList.add('hidden');
    $topMangaList.classList.remove('hidden');
  }
}

function renderTopAnime(card) {

  const $cardRendered = document.createElement('div');
  $cardRendered.classList.add('column-fifth');

  const $card = document.createElement('div');
  $card.classList.add('card');
  $cardRendered.appendChild($card);

  const $cardHeader = document.createElement('div');
  $cardHeader.classList.add('card-header', 'row');
  $card.appendChild($cardHeader);

  const $cardRank = document.createElement('h3');
  $cardRank.textContent = '#' + topAnime[card].rank;
  $cardHeader.appendChild($cardRank);

  const $imageHolder = document.createElement('div');
  $imageHolder.classList.add('row', 'image-holder');
  $card.appendChild($imageHolder);

  const $image = document.createElement('img');
  $image.setAttribute('src', topAnime[card].images.jpg.image_url);
  $image.setAttribute('alt', `${topAnime[card].title}-image`);
  $image.classList.add('card-image');
  $imageHolder.appendChild($image);

  const $cardTitle = document.createElement('div');
  $cardTitle.classList.add('row', 'card-title');
  $card.appendChild($cardTitle);

  const $title = document.createElement('p');
  $title.textContent = topAnime[card].title;
  $cardTitle.appendChild($title);

  return $cardRendered;
}

function renderTopManga(card) {

  const $cardRendered = document.createElement('div');
  $cardRendered.classList.add('column-fifth');

  const $card = document.createElement('div');
  $card.classList.add('card');
  $cardRendered.appendChild($card);

  const $cardHeader = document.createElement('div');
  $cardHeader.classList.add('card-header', 'row');
  $card.appendChild($cardHeader);

  const $cardRank = document.createElement('h3');
  $cardRank.textContent = '#' + topManga[card].rank;
  $cardHeader.appendChild($cardRank);

  const $imageHolder = document.createElement('div');
  $imageHolder.classList.add('row', 'image-holder');
  $card.appendChild($imageHolder);

  const $image = document.createElement('img');
  $image.setAttribute('src', topManga[card].images.jpg.image_url);
  $image.setAttribute('alt', `${topManga[card].title}-image`);
  $image.classList.add('card-image');
  $imageHolder.appendChild($image);

  const $cardTitle = document.createElement('div');
  $cardTitle.classList.add('row', 'card-title');
  $card.appendChild($cardTitle);

  const $title = document.createElement('p');
  $title.textContent = topManga[card].title;
  $cardTitle.appendChild($title);

  return $cardRendered;
}

function createTopAnimeList(event) {
  for (let card = 0; card <= 24; card++) {
    $topAnimeList.appendChild(renderTopAnime(card));
    $loadingScreen.classList.add('hidden');
  }
}
$animeAnchor.addEventListener('click', event => {
  viewSwap('top-anime-list');
});

function createTopMangaList(event) {
  for (let card = 0; card <= 24; card++) {
    $topMangaList.appendChild(renderTopManga(card));
  }
}
$mangaAnchor.addEventListener('click', event => {
  viewSwap('top-manga-list');
});

document.addEventListener('DOMContentLoaded', event => {
  setTimeout(createTopAnimeList, 1000);
  viewSwap('top-anime-list');
  setTimeout(createTopMangaList, 1000);
});
