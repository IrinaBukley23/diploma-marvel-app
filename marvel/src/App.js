import {useState} from 'react';
import Header from './components/Header';
import RandomChar from './components/RandomChar';
import CharList from './components/CharList';
import CharInfo from './components/CharInfo';
import Banner from './components/Banner';
import ComicsList from './components/ComicsList';
import './styles/variables.scss';

import decoration from './resources/vision.png';

const App = () => {
  
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList onCharSelected={onCharSelected}/>
          <CharInfo charId={selectedChar}/>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
        <Banner/>
        <ComicsList/>
      </main>
    </div>
  );
}

export default App;
