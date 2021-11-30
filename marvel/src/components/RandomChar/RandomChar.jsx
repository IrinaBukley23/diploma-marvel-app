import {useState, useEffect} from 'react';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './RandomChar.scss';
import mjolnir from '../../resources/mjolnir.png';

const RandomChar = () => {

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {getCharacter} = MarvelService();

    useEffect( () => {
        updateChar();
    }, [] );
    
    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(loading => false);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }

    const {name, description, thumbnail, homepage, wiki} = char;

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="randomchar">
            {spinner}
            {errorMessage}
            { !(loading | error) ? (
                <div className="randomchar__block">
                    <img 
                        src={thumbnail} 
                        alt="Random character" 
                        style={imgStyle}
                        className="randomchar__img"/>
                    <div className="randomchar__info">
                        <p className="randomchar__name"> {name} </p>
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
            ) : null }
            
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button 
                    className="button button__main"
                    onClick={updateChar}
                    >
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

export default RandomChar;