import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
/* import 'bootstrap/dist/css/bootstrap.css'; */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
