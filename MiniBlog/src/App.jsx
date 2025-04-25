import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/posts" element={<h1>Posts</h1>} />
            <Route path="/posts/:id" element={<h1>Post</h1>} />
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
