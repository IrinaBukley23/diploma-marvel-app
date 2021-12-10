import {useState} from 'react';
import RandomChar from '../../RandomChar';
import CharList from '../../CharList';
import CharInfo from '../../CharInfo';
import Form from '../../Form';

import decoration from '../../../resources/vision.png';

const MainPage = () => {
     
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
        <RandomChar/>
        <div className="char__content">
          <CharList onCharSelected={onCharSelected}/>
          <div>
            <CharInfo charId={selectedChar}/>
            <Form/>
          </div>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </>
    )
}

export default MainPage;