import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/Pages/MainPage';
import ComicsPage from './components/Pages/ComicsPage';
import SingleComicPage from './components/Pages/SingleComicPage';
import Page404 from './components/Pages/Page404';

import './styles/variables.scss';

const App = () => {
 
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/comics" element={<ComicsPage/>}></Route>
            <Route path="/comics/:comicId" element={<SingleComicPage/>}></Route>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
          </Routes>
        </main>
    </div>
    </Router>
  );
}

export default App;
