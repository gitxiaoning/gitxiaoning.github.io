import './App.scss'
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home.tsx"
import Projects from "./pages/Projects/Projects.tsx"
import Publications from './pages/Publications/Publications.tsx';


function App() {

  return (
    <div className="app">

      <div className="main-view">
        <div className="main-view__sidebar">
          <ul className="main-view__sidebar-list">
            <li className="main-view__sidebar-item"><Link to="/home">home</Link></li>
            {/* <li className="main-view__sidebar-item">about</li> */}
            <li className="main-view__sidebar-item"><Link to="/projects">projects</Link></li>
            <li className="main-view__sidebar-item"><Link to="/publications">publications</Link></li>
          </ul>
        </div>

        <div className="main-view__content">

          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="*" element={<p>page not found</p>} />
          </Routes>

        </div>

      </div>
    </div>


  )
}

export default App
