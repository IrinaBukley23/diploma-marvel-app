
import Header from './components/Header';
import RandomChar from './components/RandomChar';
import CharList from './components/CharList';
import './styles/variables.scss';

import decoration from './resources/vision.png';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <RandomChar/>
        <div className="char__content">
          <CharList/>

        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
      </main>
    </div>
  );
}

export default App;
