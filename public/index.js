const randomBtns = document.querySelectorAll('.random');
const homeBtns = document.querySelectorAll('.home');
const menuBtns = document.querySelectorAll('.menu');
const home = document.querySelector('.home-container');
const playlist = document.querySelector('.playlist-container');
const playlistCardsDiv = document.querySelector('.playlist-cards');


// Cursor

const blobCursor = () => {  
  const CURSOR = document.querySelector('#cursorBlob');
  const LINKS = document.querySelectorAll('a');

  const setCursorPos = (e) => {
    const { pageX: posX, pageY: posY } = e;
    CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2)}px`;
    CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2)}px`;
  };
  document.addEventListener('mousemove', setCursorPos);

  const setCursorHover = () => CURSOR.style.transform = 'scale(1.5)';
  const removeCursorHover = () => CURSOR.style.transform = '';
  LINKS.forEach(link => link.addEventListener('mouseover', setCursorHover));
  LINKS.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
};

blobCursor();

const reloadHome = () => {
  home.classList.remove('d-none');
  playlist.classList.add('d-none');
  blobCursor();
};

const createPlaylistCard = (artist, track) => {
    const genres = `${artist.genres.join(' ')} `.repeat(10);
    return `
        <div class="playlist-card d-none">
        <div class="artist-container">
            <img src="${artist.images[0].url}" class="artist-img mb-xlg"/>
            <h2 class="primary-font-bold dark-color lg-font mb-lg">${artist.name}</h2>
            <div class="followers-detail mb-lg">
            <a href="${artist.url}" target="blank"><img src="/assets/spotify.png" alt="Spotify Logo" class="spotify-logo"/></a>
            <h3 class="primary-font dark-color sm-font">${artist.followers} followers</h3>
            </div>
        </div>

        <div class="track-container">
            <div class="track-info mb-xlg">
            <h2 class="primary-font-bold dark-color lg-font mb-md">${track.name}</h2>
            <p class="primary-font-md primary-color sm-font upcase">Artists</p>
            <p class="primary-font dark-color sm-font">${track.artistsNames}</p>
            </div>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>

        <div class="track-genres mt-lg">
            <h3 class="primary-font-bold primary-color lg-font upcase no-wrap genres">${genres}</h3>
        </div>
        </div>
    `;
};

const setGenresOver = (evt) => {
  evt.target.style.transform = 'translateX(-200px)';
};

const setGenresLeave = (evt) => {
  evt.target.style.transform = 'translateX(400px)';
};

const handlePlaylistData = data => {
    home.classList.add('d-none');
    playlist.classList.remove('d-none');
    
    data.forEach(item => {
      const artist = mapArtistData(item.info);
      const track = mapTrackData(item.track);
      console.log(artist);
      console.log(track);

      const card = createPlaylistCard(artist, track);
      playlistCardsDiv.innerHTML += card;
    });

    playlistCardsDiv.querySelectorAll('.playlist-card')[0].classList.remove('d-none');

    playlistCardsDiv.querySelectorAll('.genres').forEach(genreBtn => {
      genreBtn.addEventListener('mouseover', setGenresOver);
      genreBtn.addEventListener('mouseleave', setGenresLeave);
    });

    blobCursor();
};

const mapArtistData = ({ id, name, genres, images, followers, external_urls }) => {
    return {
        id,
        name,
        genres,
        images,
        followers: followers.total,
        url: external_urls.spotify
    };
};

const mapTrackData = ({ id, name, album, artists }) => {
    let artistsNames = ``;
    for (let i = 0; i < artists.length; i++) {
      if (i === 0) {
        artistsNames += artists[i].name;
      } else if (i === artists.length - 1) {
        artistsNames += ` and ${artists[i].name}`;
      } else {
        artistsNames += `, ${artists[i].name}`;
      };
    };

    return {
      id,
      name,
      artistsNames,
      albumName: album.name,
      albumImages: album.images
    };
};

const randomize = () => {
  const cards = playlistCardsDiv.querySelectorAll('.playlist-card');
  if (cards.length > 0) {
    cards.forEach(card => card.classList.add('d-none'));
    cards[0].classList.remove('d-none');
    home.classList.add('d-none');
    playlist.classList.remove('d-none');
  } else {
    // TODO: add loading screen
    axios.get('/api/random')
      .then(res => {
        // TODO: kill loading screen
        handlePlaylistData(res.data);
      })
      .catch(err => {
        // TODO: kill loading screen
        // TODO: add sweet alert
        console.log('Oops, something went wrong');
      });
  };
};

const chooseTrack = evt => {
    const id = +evt.target.innerText;
    const cards = playlistCardsDiv.querySelectorAll('.playlist-card');
    cards.forEach(card => card.classList.add('d-none'));
    cards[id - 1].classList.remove('d-none');
};

randomBtns.forEach(btn => btn.addEventListener('click', randomize));
homeBtns.forEach(btn => btn.addEventListener('click', reloadHome));
menuBtns.forEach(btn => btn.addEventListener('click', chooseTrack));