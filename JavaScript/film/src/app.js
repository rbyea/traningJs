import {containerFilms} from "../index";
import imageUrlunlike from "./images/unLike.png";
import imageUrllike from "./images/like.png";

const initApp = () => {
    let FILMS = []
    const STORAGE_KEY = 'films';

    const getFilms = () => {
        const url = 'https://www.omdbapi.com/?s=marvel&apikey=9b67fc54'
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const formatData = formatResponse(data);
                FILMS = formatData;
                renderFilms(FILMS);
            });
    }
    function setFormatLocationStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }
    function getFormatLocationStorage(key, format = '{}') {
        return JSON.parse(localStorage.getItem(key) || format);
    }
    const formatResponse = (data) => {
        return data.Search.map((film) => {
            const filmsFromStorage = getFormatLocationStorage(STORAGE_KEY);
            const liked = !!filmsFromStorage[film.imdbID]?.liked;
            return ({
                ...film,
                id: film.imdbID,
                liked
            })
        })
    }

    // testFilms

    const renderFilms = (films) => {
        containerFilms.innerHTML = films.map(film => {
            const imgSwithc = film.liked === true ? imageUrllike : imageUrlunlike

            return (`
              <div class="card">
                        <img class="card__image"
                            src="${film.Poster}" />
                        <a href="./detail.html#detail/${film.id}" class="card__title">
                            ${film.Title}
                        </a>
                        <p class="card__year">${film.Year}</p>
                        <button class="card__like-btn" data-film-id="${film.id}">
                            <img class="card__like-img" src="${imgSwithc}" />
                        </button>
               </div>
            `)
        }).join('')
    }

    const onLike = () => {
        const containerFilms = document.querySelector('.films');
        containerFilms.addEventListener('click', (e) => {
            const {target} = e;
            const filmId = target.dataset.filmId;
            const foundFilm = FILMS.find((film) => film.id === filmId);
            const getLocationStorage = getFormatLocationStorage(STORAGE_KEY);

            if(target.className.includes('card__like-btn')) {
                FILMS = FILMS.map((film) => {
                    if (film.id === filmId) {
                        return {
                            ...film,
                            liked: !film.liked
                        };
                    }
                    return film;
                });
            }

            renderFilms(FILMS)

            if(foundFilm) {
                const newFilms = {
                    ...getLocationStorage,
                    [filmId]: {
                        ...foundFilm,
                        liked: !foundFilm.liked,
                    },
                };
                setFormatLocationStorage(STORAGE_KEY, newFilms);
            }
        })
    }


    getFilms()
    // setFormatLocationStorage()
    onLike()
}

export default initApp