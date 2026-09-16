const ACCESS_PASSWORD = 'demo';
const AUTH_KEY = 'a-fool-hippo-all-in-one-auth';
const AUTH_DAYS = 7;
const albumData = typeof albums === 'undefined' ? [] : albums;

const gate = document.querySelector('#gate');
const library = document.querySelector('#library');
const loginForm = document.querySelector('#loginForm');
const passwordInput = document.querySelector('#password');
const loginError = document.querySelector('#loginError');
const albumList = document.querySelector('#albumList');
const searchInput = document.querySelector('#searchInput');
const searchStatus = document.querySelector('#searchStatus');
const noResults = document.querySelector('#noResults');
const logoutButton = document.querySelector('#logoutButton');

const hasValidSession = () => {
  try {
    return Number(localStorage.getItem(AUTH_KEY) || 0) > Date.now();
  } catch (error) {
    return false;
  }
};

const saveSession = () => {
  try {
    localStorage.setItem(AUTH_KEY, String(Date.now() + AUTH_DAYS * 24 * 60 * 60 * 1000));
  } catch (error) {
    // 保存できない環境でも、今回の入室は続行します。
  }
};

const clearSession = () => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    // 保存機能を利用できない環境では何もしません。
  }
};

const showLibrary = () => {
  gate.hidden = true;
  library.hidden = false;
  renderAlbums(albumData.map((album, index) => ({ album, index })).reverse(), '');
};

const renderAlbums = (items, query) => {
  const isSearching = query.length > 0;

  albumList.innerHTML = items.map(({ album, index }) => `
    <article class="album${isSearching ? ' is-open is-search-result' : ''}">
      <button class="album__summary" type="button" aria-expanded="${isSearching}" aria-controls="album-${index}">
        <span class="album__cover">
          <img src="${album.cover}" alt="${album.title}のジャケット" onerror="this.closest('.album__cover').hidden=true">
        </span>
        <span class="album__meta">
          <small>${album.year}</small>
          <h2>${album.title}</h2>
        </span>
        <span class="album__arrow" aria-hidden="true">⌄</span>
      </button>
      <div class="album__details" id="album-${index}"${isSearching ? '' : ' hidden'}>
        <p class="album__description">${album.description}</p>
        <ol class="track-list">${album.tracks.map((track) => `<li>${isSearching && track.toLowerCase().includes(query) ? `<mark>${track}</mark>` : track}</li>`).join('')}</ol>
        <a class="youtube-button${album.youtube === '#' ? ' is-dummy' : ''}" href="${album.youtube}" target="_blank" rel="noopener noreferrer">▶ このアルバムをYouTubeで聴く</a>
      </div>
    </article>
  `).join('');

  noResults.hidden = items.length > 0;

  albumList.querySelectorAll('.album__summary').forEach((button) => {
    button.addEventListener('click', () => {
      const album = button.closest('.album');
      const details = album.querySelector('.album__details');
      const willOpen = details.hidden;
      details.hidden = !willOpen;
      album.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loginError.textContent = '';

  if (passwordInput.value !== ACCESS_PASSWORD) {
    loginError.textContent = '合言葉が違います。';
    passwordInput.select();
    return;
  }

  saveSession();
  passwordInput.value = '';
  showLibrary();
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const results = albumData
    .map((album, index) => ({ album, index }))
    .reverse()
    .filter(({ album }) => [album.title, album.year, album.description, ...album.tracks].join(' ').toLowerCase().includes(query));
  const trackCount = query ? albumData.reduce((count, album) => count + album.tracks.filter((track) => track.toLowerCase().includes(query)).length, 0) : 0;

  if (!query) {
    searchStatus.textContent = '';
  } else if (trackCount > 0) {
    searchStatus.textContent = `「${searchInput.value.trim()}」を含む曲が${trackCount}曲見つかりました。`;
  } else {
    searchStatus.textContent = `該当するアルバムが${results.length}件見つかりました。`;
  }

  renderAlbums(results, query);
});

logoutButton.addEventListener('click', () => {
  clearSession();
  library.hidden = true;
  gate.hidden = false;
  passwordInput.focus();
});

if (hasValidSession()) showLibrary();
