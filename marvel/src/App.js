import {Component} from 'react';
import Header from './components/Header';
import RandomChar from './components/RandomChar';
import CharList from './components/CharList';
import CharInfo from './components/CharInfo';
import './styles/variables.scss';

import decoration from './resources/vision.png';

class App extends Component {
  
  state = {
    selectedChar: null,
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <RandomChar/>
          <div className="char__content">
            <CharList onCharSelected={this.onCharSelected}/>
            <CharInfo charId={this.state.selectedChar}/>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision"/>
        </main>
      </div>
    );
  }
}

export default App;
