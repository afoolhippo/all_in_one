const PASSWORD_HASH = '2a97516c354b68848cdbd8f54a226a0a55b21ed138e207ad6c5cbb9c00aa5aea'; // demo
const AUTH_KEY = 'a-fool-hippo-all-in-one-auth';
const AUTH_DAYS = 7;

const gate = document.querySelector('#gate');
const library = document.querySelector('#library');
const loginForm = document.querySelector('#loginForm');
const passwordInput = document.querySelector('#password');
const loginError = document.querySelector('#loginError');
const albumList = document.querySelector('#albumList');
const searchInput = document.querySelector('#searchInput');
const noResults = document.querySelector('#noResults');
const logoutButton = document.querySelector('#logoutButton');

const hashText = async (text) => {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('');
};

const hasValidSession = () => Number(localStorage.getItem(AUTH_KEY) || 0) > Date.now();

const showLibrary = () => {
  gate.hidden = true;
  library.hidden = false;
  renderAlbums(albums);
};

const renderAlbums = (items) => {
  albumList.innerHTML = items.map((album, index) => `
    <article class="album" style="--cover: ${album.color}">
      <button class="album__summary" type="button" aria-expanded="false" aria-controls="album-${index}">
        <span class="album__cover" aria-hidden="true">${index + 1}</span>
        <span class="album__meta">
          <small>${album.year}・${album.tracks.length} TRACKS</small>
          <h2>${album.title}</h2>
          <p>${album.description}</p>
        </span>
        <span class="album__arrow" aria-hidden="true">⌄</span>
      </button>
      <div class="album__details" id="album-${index}" hidden>
        <ol class="track-list">${album.tracks.map((track) => `<li>${track}</li>`).join('')}</ol>
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

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginError.textContent = '';
  const inputHash = await hashText(passwordInput.value);

  if (inputHash !== PASSWORD_HASH) {
    loginError.textContent = '合言葉が違います。';
    passwordInput.select();
    return;
  }

  localStorage.setItem(AUTH_KEY, String(Date.now() + AUTH_DAYS * 24 * 60 * 60 * 1000));
  passwordInput.value = '';
  showLibrary();
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const results = albums.filter((album) => [album.title, album.year, album.description, ...album.tracks].join(' ').toLowerCase().includes(query));
  renderAlbums(results);
});

logoutButton.addEventListener('click', () => {
  localStorage.removeItem(AUTH_KEY);
  library.hidden = true;
  gate.hidden = false;
  passwordInput.focus();
});

if (hasValidSession()) showLibrary();
