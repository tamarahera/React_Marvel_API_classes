import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
/*         name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null */
        char: {}
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char})
        /* або this.setState({{char: char}}) */
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1010789 - 1009146) + 1009146);
        this.marvelService
/*             .getAllCharacters()
            .then(res => console.log(res)) */
            .getCharacter(id)
/*          визиваємо в ст24 - перезапис 41 ст.
            .then(res => {
               this.setState(res)
            })  */
            .then(this.onCharLoaded)
    }

    render() {
        const {char: {name, description, thumbnail, homepage, wiki}} = this.state;
        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={thumbnail} alt={name} className="randomchar__img"/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src='#' alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )    
    }
}

export default RandomChar;