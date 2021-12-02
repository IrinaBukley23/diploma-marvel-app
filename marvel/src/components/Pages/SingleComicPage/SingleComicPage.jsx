import {useEffect, useState, useCallback} from 'react';
import {useParams, Link} from 'react-router-dom';
import Banner from '../../Banner';
import Spinner from '../../Spinner';
import ErrorMessage from '../../ErrorMessage';
import MarvelService from '../../../services/MarvelService';

import './SingleComicPage.scss';

const SingleComicPage = () => {

    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const {getComic} = MarvelService();

    useEffect(() => {
        updateComic()
    }, [comicId])

    const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
            .catch(onError);
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const clearError = useCallback( () => setError(null), [] );

    const onError = () => {
        setError(true);
        setLoading(loading => false);
    }
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
   
    return (
        <>
        {errorMessage}
        {spinner}
        { !(loading || error || !comic) ? (
            <>
                <Banner/>
                <View comic={comic}/>
            </>) : null}
       
        </>
    )
} 

const View = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;