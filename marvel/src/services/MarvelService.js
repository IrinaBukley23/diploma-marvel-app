
class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=2ea5478491e7ab445e2b577db098b298';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok){
            throw new Error(`Coudn't fetch ${url}, status ${res.status}`);
        }

        return await res.json;
    }

    getAllCharacters = () => {
        return this.getResource(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
    }

    getCharacter = (id) => {
        return this.getResource(`${_apiBase}characters/${id}?${_apiKey}`)
    }
} 

export default MarvelService;