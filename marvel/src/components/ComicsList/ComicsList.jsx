import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './ComicsList.scss';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newComicsList, setNewComicsList] = useState(false);
    const [offset, setOffset] = useState(16);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics} = MarvelService();

    useEffect( () => {
        onRequest();
    }, [] );

    const onRequest = (offset) => {
        getAllComics(offset)
            .then(onComicsListLoaded)
            .catch(onError);
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if(newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setLoading(false);
        setNewComicsList(false);
        setOffset(offset => offset + 8);
        setComicsEnded(ended);
    }

    const onError = () => {
        setError(true);
        setLoading(loading => false);
    }

    function renderComics(arr) {
        const items = arr.map ( (item, i) => {
            return (
                <li 
                    className="comics__item" 
                    key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name"> {item.title} </div>
                        <div className="comics__item-price"> {item.price} </div>
                    </Link>
                </li>
            )
        } )

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }   

    const items = renderComics(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;
    
    return (
        <div className="comics__list">
           {errorMessage}
           {spinner}
           {content}
            <button 
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newComicsList}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;