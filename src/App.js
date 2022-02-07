import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { IndexPage } from './components/Pages/IndexPage';
import { ComicPage } from './components/Pages/ComicPage'
import { GamePage } from './components/Pages/GamePage'
import { QuizPage } from './components/Pages/QuizPage'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  return ( 
    <>
    <NavBar />
    <Router>
        <Routes>

          <Route path="/game" element={<IndexPage />} />

          <Route path="/comic" element={<ComicPage />} />

          <Route path="/quiz" element={<QuizPage />} />

          <Route path="/" element={<IndexPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
