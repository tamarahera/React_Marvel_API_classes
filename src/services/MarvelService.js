class MarvelService {
    _apiBase = `https://gateway.marvel.com:443/v1/public/`; //лодаш неформально означає що ми не можемо змінювати ці дані
    _apiKey = `apikey=03bceba952252af3375580476ec6cb07`;

    getResourse = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;