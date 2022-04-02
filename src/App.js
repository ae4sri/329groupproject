import { Routes, Route, HashRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { IndexPage } from './components/Pages/IndexPage';
import { ComicPage } from './components/Pages/ComicPage'
import { GamePage } from './components/Pages/GamePage'
import { QuizPage } from './components/Pages/QuizPage'
import { AboutPage } from './components/Pages/AboutPage';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  return ( 
    <>
    <HashRouter>
      <NavBar />
      
        <Routes>

          <Route path="/game" element={<GamePage />} />

          <Route path="/comic" element={<ComicPage />} />

          <Route path="/quiz" element={<QuizPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/" element={<IndexPage />} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
