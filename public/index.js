const randomBtns = document.querySelectorAll('.random');
const home = document.querySelector('.main');
const playlist = document.querySelector('.playlist');

{/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3zcBNmJH6ToRCI0WNEIuES?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}

const mock = [{
  "track": {
      "album": {
          "album_type": "compilation",
          "artists": [
              {
                  "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                  },
                  "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                  "id": "0LyfQWJT6nXafLPZqxe9Of",
                  "name": "Various Artists",
                  "type": "artist",
                  "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
              }
          ],
          "external_urls": {
              "spotify": "https://open.spotify.com/album/1wG4O32OX2POpj77Cstqk7"
          },
          "href": "https://api.spotify.com/v1/albums/1wG4O32OX2POpj77Cstqk7",
          "id": "1wG4O32OX2POpj77Cstqk7",
          "images": [
              {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b27353b6869173dde741677cf5d7",
                  "width": 640
              },
              {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e0253b6869173dde741677cf5d7",
                  "width": 300
              },
              {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d0000485153b6869173dde741677cf5d7",
                  "width": 64
              }
          ],
          "name": "Sambabook Dona Ivone Lara, Vol. 2",
          "release_date": "2015-08-19",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:1wG4O32OX2POpj77Cstqk7"
      },
      "artists": [
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/096an3uS6ZaK2XySae6SqP"
              },
              "href": "https://api.spotify.com/v1/artists/096an3uS6ZaK2XySae6SqP",
              "id": "096an3uS6ZaK2XySae6SqP",
              "name": "Arlindo Cruz",
              "type": "artist",
              "uri": "spotify:artist:096an3uS6ZaK2XySae6SqP"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2NwuJfLxzQIXkaQ7PaXGCS"
              },
              "href": "https://api.spotify.com/v1/artists/2NwuJfLxzQIXkaQ7PaXGCS",
              "id": "2NwuJfLxzQIXkaQ7PaXGCS",
              "name": "Delcio Ca",
              "type": "artist",
              "uri": "spotify:artist:2NwuJfLxzQIXkaQ7PaXGCS"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/57xRtfFlssbpntpRQOBodd"
              },
              "href": "https://api.spotify.com/v1/artists/57xRtfFlssbpntpRQOBodd",
              "id": "57xRtfFlssbpntpRQOBodd",
              "name": "Diogo Nogueira",
              "type": "artist",
              "uri": "spotify:artist:57xRtfFlssbpntpRQOBodd"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6Q1U3z1hge970f3QhrPKcW"
              },
              "href": "https://api.spotify.com/v1/artists/6Q1U3z1hge970f3QhrPKcW",
              "id": "6Q1U3z1hge970f3QhrPKcW",
              "name": "Dona Ivone Lara",
              "type": "artist",
              "uri": "spotify:artist:6Q1U3z1hge970f3QhrPKcW"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2MaqyTrc7HzuYvLnvfhxIN"
              },
              "href": "https://api.spotify.com/v1/artists/2MaqyTrc7HzuYvLnvfhxIN",
              "id": "2MaqyTrc7HzuYvLnvfhxIN",
              "name": "Mariene De Castro",
              "type": "artist",
              "uri": "spotify:artist:2MaqyTrc7HzuYvLnvfhxIN"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6rM2yY0GnVcOHMU5GD3y9E"
              },
              "href": "https://api.spotify.com/v1/artists/6rM2yY0GnVcOHMU5GD3y9E",
              "id": "6rM2yY0GnVcOHMU5GD3y9E",
              "name": "Martinho Da Vila",
              "type": "artist",
              "uri": "spotify:artist:6rM2yY0GnVcOHMU5GD3y9E"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2j5unrF80yCu3AF8MPE2VE"
              },
              "href": "https://api.spotify.com/v1/artists/2j5unrF80yCu3AF8MPE2VE",
              "id": "2j5unrF80yCu3AF8MPE2VE",
              "name": "Teresa Cristina",
              "type": "artist",
              "uri": "spotify:artist:2j5unrF80yCu3AF8MPE2VE"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3qZ2n5keOAat1SoF6bHwmb"
              },
              "href": "https://api.spotify.com/v1/artists/3qZ2n5keOAat1SoF6bHwmb",
              "id": "3qZ2n5keOAat1SoF6bHwmb",
              "name": "Zeca Pagodinho",
              "type": "artist",
              "uri": "spotify:artist:3qZ2n5keOAat1SoF6bHwmb"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5iiQvuDCnlXoK8iAhydW0u"
              },
              "href": "https://api.spotify.com/v1/artists/5iiQvuDCnlXoK8iAhydW0u",
              "id": "5iiQvuDCnlXoK8iAhydW0u",
              "name": "Leci Brandao",
              "type": "artist",
              "uri": "spotify:artist:5iiQvuDCnlXoK8iAhydW0u"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6I1r8xKn6bCeionvZVdzdR"
              },
              "href": "https://api.spotify.com/v1/artists/6I1r8xKn6bCeionvZVdzdR",
              "id": "6I1r8xKn6bCeionvZVdzdR",
              "name": "Carminho",
              "type": "artist",
              "uri": "spotify:artist:6I1r8xKn6bCeionvZVdzdR"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0MjSZ7nMuEBukUZsRYquqf"
              },
              "href": "https://api.spotify.com/v1/artists/0MjSZ7nMuEBukUZsRYquqf",
              "id": "0MjSZ7nMuEBukUZsRYquqf",
              "name": "Luiza Dionísio",
              "type": "artist",
              "uri": "spotify:artist:0MjSZ7nMuEBukUZsRYquqf"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/57pVvBwa3ZCR9LsVlkLXj7"
              },
              "href": "https://api.spotify.com/v1/artists/57pVvBwa3ZCR9LsVlkLXj7",
              "id": "57pVvBwa3ZCR9LsVlkLXj7",
              "name": "Vanessa Da Mata",
              "type": "artist",
              "uri": "spotify:artist:57pVvBwa3ZCR9LsVlkLXj7"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/37ZflmHTdxkSLQuT8w9NBs"
              },
              "href": "https://api.spotify.com/v1/artists/37ZflmHTdxkSLQuT8w9NBs",
              "id": "37ZflmHTdxkSLQuT8w9NBs",
              "name": "Criolo",
              "type": "artist",
              "uri": "spotify:artist:37ZflmHTdxkSLQuT8w9NBs"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3CtqQGt0S8sDVhei9MutSq"
              },
              "href": "https://api.spotify.com/v1/artists/3CtqQGt0S8sDVhei9MutSq",
              "id": "3CtqQGt0S8sDVhei9MutSq",
              "name": "Aline Calixto",
              "type": "artist",
              "uri": "spotify:artist:3CtqQGt0S8sDVhei9MutSq"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5zuSZ0T9iRss0BaobIc6Xm"
              },
              "href": "https://api.spotify.com/v1/artists/5zuSZ0T9iRss0BaobIc6Xm",
              "id": "5zuSZ0T9iRss0BaobIc6Xm",
              "name": "Bruno Castro",
              "type": "artist",
              "uri": "spotify:artist:5zuSZ0T9iRss0BaobIc6Xm"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7HGNYPmbDrMkylWqeFCOIQ"
              },
              "href": "https://api.spotify.com/v1/artists/7HGNYPmbDrMkylWqeFCOIQ",
              "id": "7HGNYPmbDrMkylWqeFCOIQ",
              "name": "Caetano Veloso",
              "type": "artist",
              "uri": "spotify:artist:7HGNYPmbDrMkylWqeFCOIQ"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2zDJszdrISx9K4L5hvWT33"
              },
              "href": "https://api.spotify.com/v1/artists/2zDJszdrISx9K4L5hvWT33",
              "id": "2zDJszdrISx9K4L5hvWT33",
              "name": "Zélia Duncan",
              "type": "artist",
              "uri": "spotify:artist:2zDJszdrISx9K4L5hvWT33"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4ph6Bt1mkDlmf32PSvRa8A"
              },
              "href": "https://api.spotify.com/v1/artists/4ph6Bt1mkDlmf32PSvRa8A",
              "id": "4ph6Bt1mkDlmf32PSvRa8A",
              "name": "Elba Ramalho",
              "type": "artist",
              "uri": "spotify:artist:4ph6Bt1mkDlmf32PSvRa8A"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3C46KtMg8M2HXzjSWEq2QE"
              },
              "href": "https://api.spotify.com/v1/artists/3C46KtMg8M2HXzjSWEq2QE",
              "id": "3C46KtMg8M2HXzjSWEq2QE",
              "name": "Reinaldo",
              "type": "artist",
              "uri": "spotify:artist:3C46KtMg8M2HXzjSWEq2QE"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/5Bn4jYRlfMfbxVwfPDGeL8"
              },
              "href": "https://api.spotify.com/v1/artists/5Bn4jYRlfMfbxVwfPDGeL8",
              "id": "5Bn4jYRlfMfbxVwfPDGeL8",
              "name": "Hamilton De Holanda",
              "type": "artist",
              "uri": "spotify:artist:5Bn4jYRlfMfbxVwfPDGeL8"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4IQKOXNGjuRRe0WgOm5YfB"
              },
              "href": "https://api.spotify.com/v1/artists/4IQKOXNGjuRRe0WgOm5YfB",
              "id": "4IQKOXNGjuRRe0WgOm5YfB",
              "name": "Xande De Pilares",
              "type": "artist",
              "uri": "spotify:artist:4IQKOXNGjuRRe0WgOm5YfB"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3f5VCwd57gZsqMad28jyLV"
              },
              "href": "https://api.spotify.com/v1/artists/3f5VCwd57gZsqMad28jyLV",
              "id": "3f5VCwd57gZsqMad28jyLV",
              "name": "Maria Bethânia",
              "type": "artist",
              "uri": "spotify:artist:3f5VCwd57gZsqMad28jyLV"
          },
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/72f733zGuCPEzCSLs9wOVi"
              },
              "href": "https://api.spotify.com/v1/artists/72f733zGuCPEzCSLs9wOVi",
              "id": "72f733zGuCPEzCSLs9wOVi",
              "name": "Adriana Calcanhotto",
              "type": "artist",
              "uri": "spotify:artist:72f733zGuCPEzCSLs9wOVi"
          }
      ],
      "disc_number": 1,
      "duration_ms": 228132,
      "explicit": false,
      "external_ids": {
          "isrc": "BRUKM1500026"
      },
      "external_urls": {
          "spotify": "https://open.spotify.com/track/5Ikos3uiBfPYAf7EZfz8t3"
      },
      "href": "https://api.spotify.com/v1/tracks/5Ikos3uiBfPYAf7EZfz8t3",
      "id": "5Ikos3uiBfPYAf7EZfz8t3",
      "is_local": false,
      "is_playable": true,
      "name": "Sonho Meu",
      "popularity": 60,
      "preview_url": "https://p.scdn.co/mp3-preview/c550ca4318ad33fa5496fbfbce6967759bf1f1fa?cid=6c9ec6a62d2b4417ab01c7d37ea84fba",
      "track_number": 13,
      "type": "track",
      "uri": "spotify:track:5Ikos3uiBfPYAf7EZfz8t3"
  },
  "info": {
      "external_urls": {
          "spotify": "https://open.spotify.com/artist/2MaqyTrc7HzuYvLnvfhxIN"
      },
      "followers": {
          "href": null,
          "total": 86204
      },
      "genres": [
          "mpb",
          "nova mpb",
          "pagode",
          "samba",
          "umbanda"
      ],
      "href": "https://api.spotify.com/v1/artists/2MaqyTrc7HzuYvLnvfhxIN",
      "id": "2MaqyTrc7HzuYvLnvfhxIN",
      "images": [
          {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb9c64344780a579f8659d74e4",
              "width": 640
          },
          {
              "height": 320,
              "url": "https://i.scdn.co/image/ab676161000051749c64344780a579f8659d74e4",
              "width": 320
          },
          {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f1789c64344780a579f8659d74e4",
              "width": 160
          }
      ],
      "name": "Mariene De Castro",
      "popularity": 51,
      "type": "artist",
      "uri": "spotify:artist:2MaqyTrc7HzuYvLnvfhxIN"
  }
}];

const createPlaylistCard = (artist, track) => {
  return `
    <div class="bot-card outline">
    <img src='${bot.imgAddress}' alt='${bot.name}'/>
    <h3>${bot.name}</h3>
    <h4>Health: ${bot.health}</h4>
    <p>Attack 1: ${bot.attacks[0].damage} damage</p>
    <p>Attack 2: ${bot.attacks[1].damage} damage</p>
    <button class="bot-btn" onclick="chooseBot(${bot.id})">Add to Duo</button>
    </div>
  `
};

const handlePlaylistData = data => {
    home.classList.add('d-none');
    playlist.classList.remove('d-none');
    
    data.forEach(item => {
      const artist = mapArtistData(item.info);
      const track = mapTrackData(item.track);
      console.log(artist);
      console.log(track);

      createPlaylistCard(artist, track);
    });
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
    // TODO: add loading screen
    axios.get('/api/random')
      .then(res => {
        // TODO: kill loading screen
        home.classList.add('d-none');
        playlist.classList.remove('d-none');
        handlePlaylistData(res.data);
      })
      .catch(err => {
        // TODO: kill loading screen
        // TODO: add sweet alert
        console.log('Oops, something went wrong');
      });
};

randomBtns.forEach(btn => btn.addEventListener('click', randomize));

handlePlaylistData(mock); // comment this later! only for test

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