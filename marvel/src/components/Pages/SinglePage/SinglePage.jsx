import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import MarvelService from '../../../services/MarvelService';
import Spinner from '../../Spinner';
import ErrorMessage from '../../ErrorMessage';
import Banner from "../../Banner";

const SinglePage = ({Component, dataType}) => {
        const {id} = useParams();
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);
        const {getComic, getCharacter} = MarvelService();

        useEffect(() => {
            updateData();
        }, [id])

        const updateData = () => {
            clearError();

            switch (dataType) {
                case 'comic':
                    getComic(id)
                        .then(onDataLoaded)
                        .catch(onError);
                    break;
                case 'character':
                    getCharacter(id)
                        .then(onDataLoaded)
                        .catch(onError);
            }
        }

        const onDataLoaded = (data) => {
            setData(data);
        }

        const clearError = useCallback( () => setError(null), [] );

        const onError = () => {
            setError(true);
            setLoading(loading => false);
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !data) ? <Component data={data}/> : null;

        return (
            <>
                <Banner/>
                {errorMessage}
                {spinner}
                {content}
            </>
        )
}

export default SinglePage;