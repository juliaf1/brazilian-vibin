const randomBtns = document.querySelectorAll('.random');
const home = document.querySelector('.main');
const playlist = document.querySelector('.playlist');

const createArtistsCards = data => {
// TODO: add layout and insert html for playlist pages
};

const randomize = () => {
    // TODO: add loading screen
    axios.get('/api/random')
      .then(res => {
        // TODO: kill loading screen
        home.classList.add('d-none');
        playlist.classList.remove('d-none');
        createArtistsCards(res.data);
      })
      .catch(err => {
        // TODO: kill loading screen
        // TODO: add sweet alert
        console.log('Oops, something went wrong');
      });
};

randomBtns.forEach(btn => btn.addEventListener('click', randomize));

// Cursor

const blobCursor = () => {  
    const CURSOR = document.querySelector('#cursorBlob');
    const LINKS = document.querySelectorAll('.navbar');

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