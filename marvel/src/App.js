import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/Pages/MainPage';
import ComicsPage from './components/Pages/ComicsPage';
import SinglePage from './components/Pages/SinglePage';
import SingleComicPage from './components/Pages/SingleComicPage';
import SingleCharPage from './components/Pages/SingleCharPage';
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
            <Route path="/comics/:id" element={<SinglePage Component={SingleComicPage}  dataType='comic'/>}></Route>
            <Route path="/characters/:id" element={<SinglePage Component={SingleCharPage} dataType='character'/>}></Route>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
          </Routes>
        </main>
    </div>
    </Router>
  );
}

export default App;
