import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return ( 
    <>
    <Router>
        <Routes>

          <Route path="/game" element={<p>Host Game on this Page</p>} />

          <Route path="/comic" element={<p>Put the comic here</p>} />

          <Route path="/quiz" element={<p>Put the quiz here</p>} />

          <Route path="/" element={<p>This is our home page</p>} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
