import {FETCHING_CHARS, FETCHED_CHARS} from './reducer';

const _baseOffset = 210;
const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
const _apiKey = 'apikey=2ea5478491e7ab445e2b577db098b298';
const _transformCharacter = (char) => {
    return {
        id: char.id,
        name: char.name,
        description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
        homepage: char.urls[0].url,
        wiki: char.urls[1].url,
        comics: char.comics.items
    }
}

export const getAllCharacters = async (offset = _baseOffset) => (dispatch) => {
    
    dispatch({type: FETCHING_CHARS})
    return fetch(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
        .then(res => res.json())
        .then(chars => {
            dispatch({type: FETCHED_CHARS, payload: chars.data.results.map(_transformCharacter)})
        })
}