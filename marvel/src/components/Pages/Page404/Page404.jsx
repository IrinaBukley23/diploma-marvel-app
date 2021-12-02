import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import {Link} from 'react-router-dom';

import './Page404.scss';

const Page404 = () => {
    return (
        <div className="error">
            <p className="error__text">Page doesn't exist</p>
            <ErrorMessage/>
            <Link 
                className="error__link"
                to="/"
                >Back to main page</Link>
        </div>
    )
}

export default Page404;