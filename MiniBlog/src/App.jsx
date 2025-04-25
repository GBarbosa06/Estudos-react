import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Posts from './pages/Posts/Posts'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <footer>
            <p>Mini Blog &copy; 2023</p>
          </footer>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
